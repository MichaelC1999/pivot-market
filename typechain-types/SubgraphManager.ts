/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SubgraphManagerInterface extends utils.Interface {
  contractName: "SubgraphManager";
  functions: {
    "approvedSubgraphs(address)": FunctionFragment;
    "disableSubgraph(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retrieveSubgraphStatus(address)": FunctionFragment;
    "subgraphUpdatedTimestamp(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateSubgraphStatus(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approvedSubgraphs",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableSubgraph",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveSubgraphStatus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "subgraphUpdatedTimestamp",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSubgraphStatus",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "approvedSubgraphs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableSubgraph",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveSubgraphStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subgraphUpdatedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSubgraphStatus",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalChanged(bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ApprovalChangedEvent = TypedEvent<
  [boolean],
  { isApproved: boolean }
>;

export type ApprovalChangedEventFilter = TypedEventFilter<ApprovalChangedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SubgraphManager extends BaseContract {
  contractName: "SubgraphManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubgraphManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approvedSubgraphs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    disableSubgraph(
      subgraphContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    retrieveSubgraphStatus(
      subgraphContract: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    subgraphUpdatedTimestamp(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateSubgraphStatus(
      subgraphContract: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approvedSubgraphs(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  disableSubgraph(
    subgraphContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  retrieveSubgraphStatus(
    subgraphContract: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  subgraphUpdatedTimestamp(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateSubgraphStatus(
    subgraphContract: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approvedSubgraphs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    disableSubgraph(
      subgraphContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    retrieveSubgraphStatus(
      subgraphContract: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    subgraphUpdatedTimestamp(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateSubgraphStatus(
      subgraphContract: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ApprovalChanged(bool)"(isApproved?: null): ApprovalChangedEventFilter;
    ApprovalChanged(isApproved?: null): ApprovalChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    approvedSubgraphs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disableSubgraph(
      subgraphContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    retrieveSubgraphStatus(
      subgraphContract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subgraphUpdatedTimestamp(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateSubgraphStatus(
      subgraphContract: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approvedSubgraphs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disableSubgraph(
      subgraphContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    retrieveSubgraphStatus(
      subgraphContract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subgraphUpdatedTimestamp(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateSubgraphStatus(
      subgraphContract: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}