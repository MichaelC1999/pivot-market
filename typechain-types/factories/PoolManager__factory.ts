/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolManager, PoolManagerInterface } from "../PoolManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "titleString",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "reserveContractAddressInput",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "ApprovalChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    name: "EpToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "TA",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "determinationContract",
        type: "address",
      },
    ],
    name: "addDetermination",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "approvePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "determinationContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "pivotTargetPoolId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "subgraphContract",
        type: "address",
      },
    ],
    name: "determinePivot",
    outputs: [
      {
        internalType: "bool",
        name: "pivotExecuted",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disapprovePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subgraphContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSubgraphTimeseriesDataPoint",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "senderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialDepositAmount",
        type: "uint256",
      },
    ],
    name: "initializePoolTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "latestSubgraphTimeseries",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "precision",
        type: "uint256",
      },
    ],
    name: "percent",
    outputs: [
      {
        internalType: "uint256",
        name: "quotient",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setReserveContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subgraphContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "dataPoint",
        type: "bytes32",
      },
    ],
    name: "setSubgraphTimeseriesDataPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simulateInterestGained",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "simulateUserDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simulatedPositionBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "title",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "userDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userToDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "userWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a01b1916600160a01b178155600180546001600160a01b0319908116301790915560028054821690556003919091556008805490911690556103e86009819055600a55686c6b935b8bbd400000600e553480156200006857600080fd5b5060405162002f7a38038062002f7a8339810160408190526200008b916200015e565b6200009633620000f1565b600b91909155600780546001600160a01b039283166001600160a01b0319918216179091556005805493909216928116929092179055600480549091167330cf84e121f2105e638746dcccffebce65b18f7c1790556200019f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200015957600080fd5b919050565b6000806000606084860312156200017457600080fd5b6200017f8462000141565b925060208401519150620001966040850162000141565b90509250925092565b612dcb80620001af6000396000f3fe60806040523480156200001157600080fd5b5060043610620001915760003560e01c806351e63e2f11620000f0578063b262439611620000a3578063e96a97f0116200007a578063e96a97f01462000399578063eef49ee314620003c7578063f2fde38b14620003d1578063f868e76614620003e857600080fd5b8063b26243961462000328578063ce4faa8e146200035f578063dec696b4146200038257600080fd5b806351e63e2f14620002c2578063715018a614620002d75780637ad03c8f14620002e15780638da5cb5b14620002eb5780639c84bd6314620002fd578063a89fb8a3146200031157600080fd5b8063328dddbc1162000149578063328dddbc1462000252578063386cbcd8146200025c5780633b9056bf14620002735780633fbf6044146200028a5780634a79d50c14620002a15780634b6dbad614620002ab57600080fd5b80622c1a9e146200019657806301ffc9a714620001c05780631329ea8e14620001f85780631a90fec31462000211578063233461e2146200023e578063303810771462000248575b600080fd5b620001ad620001a7366004620018c8565b620003ff565b6040519081526020015b60405180910390f35b620001e7620001d1366004620018f5565b6001600160e01b03191663fa6be2a560e01b1490565b6040519015158152602001620001b7565b6200020f6200020936600462001945565b6200045d565b005b60085462000225906001600160a01b031681565b6040516001600160a01b039091168152602001620001b7565b620001ad600e5481565b6200020f62000489565b6200020f620004d6565b6200020f6200026d36600462001963565b620005a5565b6200020f6200028436600462001990565b6200082b565b6200020f6200029b36600462001945565b62000d96565b620001ad600b5481565b6200020f620002bc36600462001990565b62000e78565b600054620001e790600160a01b900460ff1681565b6200020f620010aa565b6200020f620010c2565b6000546001600160a01b031662000225565b60075462000225906001600160a01b031681565b620001e762000322366004620019aa565b62001111565b6200020f62000339366004620019d9565b6001600160a01b039092166000908152600c602090815260408083209383529290522055565b620001ad6200037036600462001945565b600d6020526000908152604090205481565b620001ad6200039336600462001963565b620011e6565b620001ad620003aa36600462001963565b600c60209081526000928352604080842090915290825290205481565b620001ad60035481565b6200020f620003e236600462001945565b62001211565b6200020f620003f936600462001990565b62001290565b6000806200040f83600162001a25565b6200041c90600a62001b3d565b62000428908662001b4b565b90506000600a6200043a868462001b6d565b6200044790600562001a25565b62000453919062001b6d565b9695505050505050565b620004676200146f565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b620004936200146f565b6000805460ff60a01b191681556040519081527fbf566f7ffac9cb664ec11d47aa078c63570d0e55e35d5cdaf12510aaf6067919906020015b60405180910390a1565b683635c9adc5dea00000600e6000828254620004f3919062001a25565b90915550506005546040516340c10f1960e01b8152306004820152683635c9adc5dea0000060248201526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156200054d57600080fd5b505af115801562000562573d6000803e3d6000fd5b50506006546040516001600160a01b0390911681527f8b1d45af274de9482752545729395f9d156ff645e39b3829b741963c516e7d4b92506020019050620004cc565b620005af6200146f565b6006546001600160a01b0316156200060e5760405162461bcd60e51b815260206004820152601760248201527f506f6f6c2070546f6b656e20416c72656164792073657400000000000000000060448201526064015b60405180910390fd5b600554604080516395d89b4160e01b815290516000926001600160a01b0316916395d89b419160048083019286929190829003018186803b1580156200065357600080fd5b505afa15801562000668573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000692919081019062001bd9565b90506000604051602001620006ae90600760fc1b815260010190565b60405160208183030381529060405282604051602001620006d0919062001c92565b60408051601f1981840301815290829052620006f0929160200162001cb0565b60408051601f19818403018152828252600b546020840152925060009101604051602081830303815290604052905060008260405160200162000734919062001c92565b6040516020818303038152906040529050600082826040516200075790620018ba565b6200076492919062001d11565b604051809103906000f08015801562000781573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b038381169182179092556040516340c10f1960e01b8152918a1660048301526509184e72a00060248301529192506340c10f1990604401600060405180830381600087803b158015620007e957600080fd5b505af1158015620007fe573d6000803e3d6000fd5b5050506001600160a01b039097166000908152600d60205260409020869055505050600392909255505050565b600e8054908290600062000840838562001d43565b9091555050806200088d5760405162461bcd60e51b8152602060048201526016602482015275506f736974696f6e20686173206e6f2061737365747360501b604482015260640162000605565b60006200089d8383600d620003ff565b905060006509184e72a000600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620008f757600080fd5b505afa1580156200090c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000932919062001d5d565b6200093e908462001b4b565b6200094a919062001b6d565b6006546040516370a0823160e01b81523360048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b1580156200099457600080fd5b505afa158015620009a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009cf919062001d5d565b90506000620009e0600a8462001b6d565b620009ed90600a62001b4b565b620009f9908462001d43565b90506005811015801562000a0d5750818314155b1562000a235762000a2060018462001a25565b92505b8183111562000a9d576040805162461bcd60e51b81526020600482015260248101919091527f576974686472617720616d6f756e742067726561746572207468616e2070726960448201527f6e636970616c202b20696e746572657374206f77656420746f2073656e646572606482015260840162000605565b336000908152600d602052604081205487111562000ae957336000908152600d602052604090205462000ad1908862001d43565b336000908152600d6020526040812055905062000b10565b336000908152600d60205260408120805489929062000b0a90849062001d43565b90915550505b60095460009062000b246127108462001b6d565b62000b30919062001b4b565b90506000600a546127108462000b47919062001b6d565b62000b53919062001b4b565b9050600062000b63828462001a25565b9050808a1162000b875760405162461bcd60e51b8152600401620006059062001d77565b600062000b95848c62001d43565b9050831562000ba95762000ba984620014cb565b62000bb5838262001d43565b9050821562000bc95762000bc9836200162a565b60055460405163095ea7b360e01b8152306004820152602481018390526001600160a01b039091169063095ea7b390604401602060405180830381600087803b15801562000c1657600080fd5b505af115801562000c2b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000c51919062001dc8565b506005546040516323b872dd60e01b8152306004820152336024820152604481018390526001600160a01b03909116906323b872dd90606401602060405180830381600087803b15801562000ca557600080fd5b505af115801562000cba573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000ce0919062001dc8565b508a6003541062000d0b578a6003600082825462000cff919062001d43565b9091555062000d119050565b60006003555b6006546001600160a01b031687891162000d885760405163079cc67960e41b8152336004820152602481018a90526001600160a01b038216906379cc679090604401600060405180830381600087803b15801562000d6e57600080fd5b505af115801562000d83573d6000803e3d6000fd5b505050505b505050505050505050505050565b6008546001600160a01b03161562000e565760405162461bcd60e51b815260206004820152607060248201527f5468697320706f6f6c2068617320616c7265616479207365742061206465746560448201527f726d696e6174696f6e20636f6e74726163742e2041206e657720706f6f6c206d60648201527f757374206265206372656174656420746f20696d706c656d656e74206120646960848201526f1999995c995b9d0818dbdb9d1c9858dd60821b60a482015260c40162000605565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6005546040516340c10f1960e01b8152306004820152602481018390526001600160a01b03909116906340c10f1990604401600060405180830381600087803b15801562000ec557600080fd5b505af115801562000eda573d6000803e3d6000fd5b50507330cf84e121f2105e638746dcccffebce65b18f7c6000908152600d6020527f4be10422b32d00b126fb5cf43cca44c44aa5e67a411025d571ba8c49f77dd6ee805485945090925062000f3190849062001a25565b92505081905550806003600082825462000f4c919062001a25565b9091555050600e8054908290600062000f66838562001a25565b909155506000905062000f7c83836004620003ff565b90506000612710600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801562000fd257600080fd5b505afa15801562000fe7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200100d919062001d5d565b62001019908462001b4b565b62001025919062001b6d565b6006546040516340c10f1960e01b81527330cf84e121f2105e638746dcccffebce65b18f7c6004820152602481018390529192506001600160a01b03169081906340c10f19906044015b600060405180830381600087803b1580156200108a57600080fd5b505af11580156200109f573d6000803e3d6000fd5b505050505050505050565b620010b46200146f565b620010c06000620016be565b565b620010cc6200146f565b6000805460ff60a01b1916600160a01b179055604051600181527fbf566f7ffac9cb664ec11d47aa078c63570d0e55e35d5cdaf12510aaf606791990602001620004cc565b336000908152600d6020526040812054600180548392906001600160a01b031630146200119d57600062001145826200170e565b90506001811515146200119b5760405162461bcd60e51b815260206004820152601b60248201527f57697468647261772066756e647320756e7375636365737366756c0000000000604482015260640162000605565b505b6003819055600280546001600160a01b0387166001600160a01b0319918216179091556001805490911681555050600480546001600160a01b0319163317905550909392505050565b6001600160a01b0382166000908152600c602090815260408083208484529091529020545b92915050565b6200121b6200146f565b6001600160a01b038116620012825760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000605565b6200128d81620016be565b50565b6005546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd90606401602060405180830381600087803b158015620012e357600080fd5b505af1158015620012f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200131e919062001dc8565b50336000908152600d6020526040812080548392906200134090849062001a25565b9250508190555080600360008282546200135b919062001a25565b9091555050600e8054908290600062001375838562001a25565b90915550600090506200138b83836004620003ff565b90506000612710600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620013e157600080fd5b505afa158015620013f6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200141c919062001d5d565b62001428908462001b4b565b62001434919062001b6d565b6006546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b03169081906340c10f19906044016200106f565b6000546001600160a01b03163314620010c05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000605565b60055460075460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b390604401602060405180830381600087803b1580156200151c57600080fd5b505af115801562001531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001557919062001dc8565b5060075460055460405163235a5a2d60e21b81523060048201526001600160a01b039182166024820152604481018490529116908190638d6968b490606401600060405180830381600087803b158015620015b157600080fd5b505af1158015620015c6573d6000803e3d6000fd5b505060405163a8cfb03f60e01b8152600481018590526001600160a01b038416925063a8cfb03f9150602401600060405180830381600087803b1580156200160d57600080fd5b505af115801562001622573d6000803e3d6000fd5b505050505050565b6005546004805460405163a9059cbb60e01b81526001600160a01b0391821692810192909252602482018490529091169063a9059cbb90604401602060405180830381600087803b1580156200167f57600080fd5b505af115801562001694573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620016ba919062001dc8565b5050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b336000908152600d602052604081205460019082908411156200175f57336000908152600d602052604090205462001747908562001d43565b336000908152600d6020526040812055905062001786565b336000908152600d6020526040812080548692906200178090849062001d43565b90915550505b6009546000906200179a6127108462001b6d565b620017a6919062001b4b565b90506000600a5461271084620017bd919062001b6d565b620017c9919062001b4b565b90506000620017d9828462001a25565b9050808711620017fd5760405162461bcd60e51b8152600401620006059062001d77565b60006200180b848962001d43565b905083156200181f576200181f84620014cb565b6200182b838262001d43565b905082156200183f576200183f836200162a565b6001861515146200188b5760405162461bcd60e51b8152602060048201526015602482015274141a5d9bdd081dda5d1a191c985dc819985a5b1959605a1b604482015260640162000605565b5050506003949094555050600280546001600160a01b0319908116909155600180549091163017815592915050565b610fa98062001ded83390190565b600080600060608486031215620018de57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156200190857600080fd5b81356001600160e01b0319811681146200192157600080fd5b9392505050565b80356001600160a01b03811681146200194057600080fd5b919050565b6000602082840312156200195857600080fd5b620019218262001928565b600080604083850312156200197757600080fd5b620019828362001928565b946020939093013593505050565b600060208284031215620019a357600080fd5b5035919050565b60008060408385031215620019be57600080fd5b82359150620019d06020840162001928565b90509250929050565b600080600060608486031215620019ef57600080fd5b620019fa8462001928565b95602085013595506040909401359392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111562001a3b5762001a3b62001a0f565b500190565b600181815b8085111562001a8157816000190482111562001a655762001a6562001a0f565b8085161562001a7357918102915b93841c939080029062001a45565b509250929050565b60008262001a9a575060016200120b565b8162001aa9575060006200120b565b816001811462001ac2576002811462001acd5762001aed565b60019150506200120b565b60ff84111562001ae15762001ae162001a0f565b50506001821b6200120b565b5060208310610133831016604e8410600b841016171562001b12575081810a6200120b565b62001b1e838362001a40565b806000190482111562001b355762001b3562001a0f565b029392505050565b600062001921838362001a89565b600081600019048311821515161562001b685762001b6862001a0f565b500290565b60008262001b8b57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562001bc357818101518382015260200162001ba9565b8381111562001bd3576000848401525b50505050565b60006020828403121562001bec57600080fd5b815167ffffffffffffffff8082111562001c0557600080fd5b818401915084601f83011262001c1a57600080fd5b81518181111562001c2f5762001c2f62001b90565b604051601f8201601f19908116603f0116810190838211818310171562001c5a5762001c5a62001b90565b8160405282815287602084870101111562001c7457600080fd5b62001c8783602083016020880162001ba6565b979650505050505050565b6000825162001ca681846020870162001ba6565b9190910192915050565b6000835162001cc481846020880162001ba6565b83519083019062001cda81836020880162001ba6565b01949350505050565b6000815180845262001cfd81602086016020860162001ba6565b601f01601f19169290920160200192915050565b60408152600062001d26604083018562001ce3565b828103602084015262001d3a818562001ce3565b95945050505050565b60008282101562001d585762001d5862001a0f565b500390565b60006020828403121562001d7057600080fd5b5051919050565b60208082526031908201527f57697468647261772076616c756520746f6f2068696768206166746572206163604082015270636f756e74696e6720666f72206665657360781b606082015260800190565b60006020828403121562001ddb57600080fd5b815180151581146200192157600080fdfe60806040523480156200001157600080fd5b5060405162000fa938038062000fa9833981016040819052620000349162000251565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002f8565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec90620002bb565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ac57600080fd5b81516001600160401b0380821115620001c957620001c962000184565b604051601f8301601f19908116603f01168101908282118183101715620001f457620001f462000184565b816040528381526020925086838588010111156200021157600080fd5b600091505b8382101562000235578582018301518183018401529082019062000216565b83821115620002475760008385830101525b9695505050505050565b600080604083850312156200026557600080fd5b82516001600160401b03808211156200027d57600080fd5b6200028b868387016200019a565b93506020850151915080821115620002a257600080fd5b50620002b1858286016200019a565b9150509250929050565b600181811c90821680620002d057607f821691505b60208210811415620002f257634e487b7160e01b600052602260045260246000fd5b50919050565b610ca180620003086000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b411461021f578063a457c2d714610227578063a9059cbb1461023a578063dd62ed3e1461024d578063f2fde38b1461026057600080fd5b806370a08231146101c0578063715018a6146101e957806379cc6790146101f15780638da5cb5b1461020457600080fd5b8063313ce567116100de578063313ce56714610176578063395093511461018557806340c10f191461019857806342966c68146101ad57600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015157806323b872dd14610163575b600080fd5b610118610273565b6040516101259190610ac5565b60405180910390f35b61014161013c366004610b36565b610305565b6040519015158152602001610125565b6002545b604051908152602001610125565b610141610171366004610b60565b61031d565b60405160128152602001610125565b610141610193366004610b36565b610341565b6101ab6101a6366004610b36565b610363565b005b6101ab6101bb366004610b9c565b610379565b6101556101ce366004610bb5565b6001600160a01b031660009081526020819052604090205490565b6101ab610386565b6101ab6101ff366004610b36565b61039a565b6005546040516001600160a01b039091168152602001610125565b6101186103af565b610141610235366004610b36565b6103be565b610141610248366004610b36565b61043e565b61015561025b366004610bd7565b61044c565b6101ab61026e366004610bb5565b610477565b60606003805461028290610c0a565b80601f01602080910402602001604051908101604052809291908181526020018280546102ae90610c0a565b80156102fb5780601f106102d0576101008083540402835291602001916102fb565b820191906000526020600020905b8154815290600101906020018083116102de57829003601f168201915b5050505050905090565b6000336103138185856104ed565b5060019392505050565b60003361032b858285610612565b61033685858561068c565b506001949350505050565b600033610313818585610354838361044c565b61035e9190610c45565b6104ed565b61036b610830565b610375828261088a565b5050565b6103833382610949565b50565b61038e610830565b6103986000610a73565b565b6103a5823383610612565b6103758282610949565b60606004805461028290610c0a565b600033816103cc828661044c565b9050838110156104315760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61033682868684036104ed565b60003361031381858561068c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61047f610830565b6001600160a01b0381166104e45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610428565b61038381610a73565b6001600160a01b03831661054f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610428565b6001600160a01b0382166105b05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610428565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061061e848461044c565b9050600019811461068657818110156106795760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610428565b61068684848484036104ed565b50505050565b6001600160a01b0383166106f05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610428565b6001600160a01b0382166107525760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610428565b6001600160a01b038316600090815260208190526040902054818110156107ca5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610428565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610686565b6005546001600160a01b031633146103985760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610428565b6001600160a01b0382166108e05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610428565b80600260008282546108f29190610c45565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166109a95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610428565b6001600160a01b03821660009081526020819052604090205481811015610a1d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610428565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610605565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b81811015610af257858101830151858201604001528201610ad6565b81811115610b04576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b3157600080fd5b919050565b60008060408385031215610b4957600080fd5b610b5283610b1a565b946020939093013593505050565b600080600060608486031215610b7557600080fd5b610b7e84610b1a565b9250610b8c60208501610b1a565b9150604084013590509250925092565b600060208284031215610bae57600080fd5b5035919050565b600060208284031215610bc757600080fd5b610bd082610b1a565b9392505050565b60008060408385031215610bea57600080fd5b610bf383610b1a565b9150610c0160208401610b1a565b90509250929050565b600181811c90821680610c1e57607f821691505b60208210811415610c3f57634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610c6657634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220cbbfe39938a1b68a781a75ff8996d18f62f3b89f19b09b474db6480bb7f6089a64736f6c63430008090033a2646970667358221220e49d768c96d6084bf33bf222a74890b2cbc8fb9cd809dc867a9dc4ca332d773c64736f6c63430008090033";

type PoolManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolManager__factory extends ContractFactory {
  constructor(...args: PoolManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PoolManager";
  }

  deploy(
    depositToken: string,
    titleString: BytesLike,
    reserveContractAddressInput: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolManager> {
    return super.deploy(
      depositToken,
      titleString,
      reserveContractAddressInput,
      overrides || {}
    ) as Promise<PoolManager>;
  }
  getDeployTransaction(
    depositToken: string,
    titleString: BytesLike,
    reserveContractAddressInput: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      depositToken,
      titleString,
      reserveContractAddressInput,
      overrides || {}
    );
  }
  attach(address: string): PoolManager {
    return super.attach(address) as PoolManager;
  }
  connect(signer: Signer): PoolManager__factory {
    return super.connect(signer) as PoolManager__factory;
  }
  static readonly contractName: "PoolManager";
  public readonly contractName: "PoolManager";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolManagerInterface {
    return new utils.Interface(_abi) as PoolManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolManager {
    return new Contract(address, _abi, signerOrProvider) as PoolManager;
  }
}
