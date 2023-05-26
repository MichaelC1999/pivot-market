pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "./GovernanceToken.sol";
import "./PoolManager.sol";
import "./governance_standard/GovernorContract.sol";



interface IUniswapV3Factory {
    function getPool(address,address,uint24) external view returns (address);
}

interface IGovernorContract {
    function timelock() external view returns (address);
}

interface IPoolManagerStandard {
    function reserveContractAddress() external returns (address);
    function setReserveContractAddress(address) external;
    function title() external view returns (bytes32);
}

contract ProtocolReserveManager is Ownable {

    address governorContract;

    //protocolToken is the token that when held accumulates protocol revenue for the holder
    address public protocolToken;

    address TESTNETWETH = address(0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f);
//    address addressWETH = address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    address addressWETH = TESTNETWETH;
    IERC20 tokenWETH = IERC20(addressWETH);

    uint256 collectionNonce = 0;

    mapping(address => uint256) public revenueAvailableByUser;

    mapping(address => uint256) public userToLastUpdateNonce;

    mapping(uint256 => uint256) public cummulativeReserveFactor;

    mapping(address => address) public uniswapPoolCache;

    //Easily pull the pool by its title
    mapping(bytes32 => address) public titleToPool;

    //RevenueCollected emits the pool that the revenue was collected from and the amount of revenue collected
    event RevenueCollected(address pool, uint256 amount);
    
    event TokensWithdrawn(address indexed token, address indexed recipient, uint256 amount);

    event PoolContractDeployed(address contractAddress);


    constructor(address token, address governorAddress) {
        cummulativeReserveFactor[0] = 0;
        protocolToken = token;
        governorContract = governorAddress;
    }

    function deployPoolContract(address depositToken, bytes32 title, uint256 initialDepositAmount) public {        
        PoolManager poolManagerContract = new PoolManager(depositToken, title, address(this));  // Deploy PoolManager
        address poolManagerAddress = address(poolManagerContract);
        TestToken testToken = TestToken(depositToken);
        //testToken.mint(address(this), initialDepositAmount);
        IERC20(depositToken).transferFrom(msg.sender, poolManagerAddress, initialDepositAmount);

        poolManagerContract.initializePoolTokens(msg.sender, initialDepositAmount);

        address timelock = IGovernorContract(governorContract).timelock();
        poolManagerContract.transferOwnership(timelock);

        titleToPool[title] = poolManagerAddress;
        require(poolManagerAddress != address(0), "Failed To deploy");

        emit PoolContractDeployed(poolManagerAddress);
    }

    //********************************************************************************************************************************************
    //DEPRECATED FUNCTION, POOL SHOULD BE UNIFORM AND DEPLOYED DIRECTLY FROM THIS CONTRACT

    function includeNewPool(address newPoolAddress) external {
        //check if compatible with IPoolManagerStandard
        //If so, apply the IPoolManagerStandard interface to the address
        bytes4 interfaceId = type(IPoolManagerStandard).interfaceId;
        IERC165 poolManagerCompatibilityInstance = IERC165(newPoolAddress);
        bool interfaceSupported = poolManagerCompatibilityInstance.supportsInterface(interfaceId);
        require(interfaceSupported == true, "Pool is incompatible with the standard pool interface");

        PoolManager poolContractInstance = PoolManager(newPoolAddress);



        //Check if ownership has been transfered to this reserve contract
        address poolOwner = poolContractInstance.owner();
        require(poolOwner == address(this), "Pool owner must be the reserve contract to be included. Call the transferOwner() function on the pool with this contract address as argument");

        //Call various onlyOwner functions to set things like the reserveAddress and other config variables that determine the flow of funds
        address poolReserveAddress = poolContractInstance.reserveContractAddress();
        if (poolReserveAddress != address(this)) {
            poolContractInstance.setReserveContractAddress(address(this));
        }

        //transfer ownership to timelock
        address timelock = IGovernorContract(governorContract).timelock();
        poolContractInstance.transferOwnership(timelock);
        bytes32 title = poolContractInstance.title();

        //add to pool list
        titleToPool[title] = newPoolAddress;

        //emit the event
        emit PoolContractDeployed(newPoolAddress);
    }
    //***********************************************************************************************************************************************************

    //TESTING FUNCTION ****************************************************************************************************************************************
    //execute separate contract with ERC 20 token, and mint to this (pool) address 

    event TestTokenDeployed(address tokenAddress);
    function deployTestToken() public {
        TestToken testToken = new TestToken(msg.sender);  // Deploy TestToken
        emit TestTokenDeployed(address(testToken));
    }

    //****************************************************************************************************************************************


    function acctProtocolRevenueCalculation(address user) public returns (uint256) {
        //This function gets executed to calculate the **PROTOCOL LEVEL** revenues accumulated for the sender since the last calculation
        //Can be manually called to update protocol level user revenues
        //Called every time user/protocol token holder attempts to withdraw revenues
            //But this function does not send any revenues to the user, but rather just updates the calculations to give current amounts available
        //Called every token transfer to track updates to user accumulations

        //In the case of transfers, this function should execute before the balance is updated

        //Function takes the most recently recorded cummulativeReserveFactor and subtracts the reserve factor of the last time the user revenue was updated. 
        //This gets the per unit protocol revenues for a token holder since holding that amount of tokens

        //Adds the appropriate revenue to the user's balance
        //updates the user collection nonce

        uint256 userProtocolTokenBalance = IERC20(protocolToken).balanceOf(user);

        uint factor = cummulativeReserveFactor[collectionNonce]-cummulativeReserveFactor[userToLastUpdateNonce[user]];
        uint revenueWithTenth = (userProtocolTokenBalance * factor) / (10**23);
        uint remainder = revenueWithTenth % 10;
        uint revenue = revenueWithTenth/10;
        if (remainder >= 5) {
            revenue += 1;
        }
        revenueAvailableByUser[user] += revenue;
        userToLastUpdateNonce[user] = collectionNonce;
        return revenueAvailableByUser[user];
    }
    
    function findSwapPool(address token) public returns (address) {

        //This function finds the UniswapV3 pool to perform a swap to WETH
        //Currently commented out all Uniswap integration while on testnets

        //address swapPoolUsed = uniswapPoolCache[token];
        //if (_isContract(swapPoolUsed)) {
        //    return swapPoolUsed;
        //}
        //address UniswapFactory = address(0x1F98431c8aD98523631AE4a59f267346ea31F984);
        //IUniswapV3Factory factory = IUniswapV3Factory(UniswapFactory);
        //address poolToSwap = address(0);
        //address WETH500 = factory.getPool(addressWETH, token, 500);
        //if (_isContract(WETH500)) {
        //    return WETH500;
        //}
        //address WETH3000 = factory.getPool(addressWETH, token, 3000);
        //if (_isContract(WETH3000)) {
        //    return WETH3000;
        //}
        //address WETH10000 = factory.getPool(addressWETH, token, 10000);
        //if (_isContract(WETH10000)) {
        //    return WETH10000;
        //}
        return address(0);
    }

    function transferRevenueAsWETH(address pool, address revenueToken, uint amount) internal {
        //This function delivers the revenue as WETH to the reserve contract
        //If the revenueToken is not WETH and a UniswapV3 pool exists, swap the token for WETH and transfer it to reserve contract
        //This function is internal, only being called within the 'collectProtocolRevenue()' logic to send revenue to the reserve contract
        //pool is the address of the pool from which the revenues are being transfered from, msg.sender would always be the reserve contract

        //pool that is origin of revenue has already approved the transfer executedwithin this reserve contract
        //transfer from origin pool to this reserve contract
        IERC20(revenueToken).transferFrom(pool, address(this), amount);    

        if (revenueToken != addressWETH) {
            //Call the findSwapPool() function to get the swap pool
            address UniswapPool = findSwapPool(revenueToken);
            if (UniswapPool != address(0)) {
                IUniswapV3Pool uniswapV3Pool = IUniswapV3Pool(UniswapPool);
                //approve the uniswap pool from the reserve contract to perform the transfer/swap
                IERC20(revenueToken).approve(UniswapPool, amount);

                bool zeroForOne = true;
                if (uniswapV3Pool.token0() == addressWETH) {
                    zeroForOne = false;
                }

                uint data = 0;
                //perform the swap, transfering the WETH being swapped for to this reserve contract
                uniswapV3Pool.swap(
                    address(this),
                    zeroForOne,
                    int256(amount),
                    0,
                    abi.encodePacked(data)
                );
            }
        }
    }

    function collectProtocolRevenue(address pool, address revenueToken, uint256 amount) external {
        //This function takes protocol level revenues from the pool contract and sends to the protocol reserve
        // Must be called from a pool contract that is depositing fees into the protocol reserve
        //The pool contract must approve the spending from this reserve contract
        
        require(amount > 0, "Amount must be greater than zero");

        //Calls the transferRevenueAsWETH function to possibly convert to WETH and do the actual transfer
        transferRevenueAsWETH(pool, revenueToken, amount);

        //Increment the nonce for total number of protocol revenue collections across all pools
        uint priorNonce = collectionNonce;
        collectionNonce += 1;

        //Calculate the reserve factor from this collection
        //Scale the amount by 10**24 to account for decimals

        uint supply = IERC20(protocolToken).totalSupply();
        uint256 scaledAmount = amount * (10**24);
        cummulativeReserveFactor[collectionNonce] = (scaledAmount / supply) + cummulativeReserveFactor[collectionNonce - 1];

        emit RevenueCollected(pool, amount);
    }

    function withdrawRevenues(uint256 amount, address revenueToken) public {
        //This function is to be called by protocol token holders when they want to withdraw their accumulated revenues from the protocol
        //address revenueToken is FOR TESTING PURPOSES. SHOULD BE WETH IN PRODUCTION
        
        require(amount > 0, "Amount must be greater than zero");
        acctProtocolRevenueCalculation(msg.sender);

        //TESTING TAKES BALANCE OF INPUT REV TOKEN, IN PRODUCTION SHOULD BE WETH
        //require(tokenWETH.balanceOf(address(this)) >= amount, "Insufficient balance");
        require(IERC20(revenueToken).balanceOf(address(this)) >= amount, "Insufficient balance1");
        
        require(revenueAvailableByUser[msg.sender] >= amount, "Insufficient balance2");

        //TESTING TRANSFERS INPUT REV TOKEN, IN PRODUCTION THIS IS WETH
        //tokenWETH.transfer(msg.sender, amount);
        IERC20(revenueToken).transfer(msg.sender, amount);
        
        revenueAvailableByUser[msg.sender] -= amount;
        emit TokensWithdrawn(revenueToken, msg.sender, amount);

    }

    function _isContract(address _a) public returns (bool) {
        uint size;
        assembly {
            size := extcodesize(_a)
        }
        return size > 0;
    }
}