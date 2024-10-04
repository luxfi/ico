/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TestableLUXSaleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "LUX"
      | "addTime"
      | "basePrice"
      | "buy"
      | "buyWithLimit"
      | "claim"
      | "claimAll"
      | "claimed"
      | "collect"
      | "createFirstDay"
      | "createOnDay"
      | "createPerDay"
      | "dailyTotals"
      | "dayFor"
      | "foundersAllocation"
      | "foundersKey"
      | "freeze"
      | "getCurrentPriceFloor"
      | "initialize"
      | "keys"
      | "localTime"
      | "numberOfDays"
      | "openTime"
      | "owner"
      | "priceIncreaseRate"
      | "register"
      | "renounceOwnership"
      | "startTime"
      | "time"
      | "today"
      | "totalSupply"
      | "transferOwnership"
      | "userBuys"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "LogBuy"
      | "LogClaim"
      | "LogCollect"
      | "LogFreeze"
      | "LogRegister"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "LUX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "basePrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "buy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyWithLimit",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "claimAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "collect", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createFirstDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createOnDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPerDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dailyTotals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dayFor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "foundersAllocation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "foundersKey",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "freeze", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentPriceFloor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "keys", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "localTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numberOfDays",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "openTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceIncreaseRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "register", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(functionFragment: "time", values?: undefined): string;
  encodeFunctionData(functionFragment: "today", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userBuys",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "LUX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "basePrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyWithLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createFirstDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOnDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dailyTotals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dayFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "foundersAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "foundersKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "freeze", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPriceFloor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "localTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberOfDays",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceIncreaseRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "time", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "today", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userBuys", data: BytesLike): Result;
}

export namespace LogBuyEvent {
  export type InputTuple = [
    window: BigNumberish,
    user: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [window: bigint, user: string, amount: bigint];
  export interface OutputObject {
    window: bigint;
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogClaimEvent {
  export type InputTuple = [
    window: BigNumberish,
    user: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [window: bigint, user: string, amount: bigint];
  export interface OutputObject {
    window: bigint;
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogCollectEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogFreezeEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogRegisterEvent {
  export type InputTuple = [user: AddressLike, key: string];
  export type OutputTuple = [user: string, key: string];
  export interface OutputObject {
    user: string;
    key: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TestableLUXSale extends BaseContract {
  connect(runner?: ContractRunner | null): TestableLUXSale;
  waitForDeployment(): Promise<this>;

  interface: TestableLUXSaleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  LUX: TypedContractMethod<[], [string], "view">;

  addTime: TypedContractMethod<[extra: BigNumberish], [void], "nonpayable">;

  basePrice: TypedContractMethod<[], [bigint], "view">;

  buy: TypedContractMethod<[], [void], "payable">;

  buyWithLimit: TypedContractMethod<
    [day: BigNumberish, limit: BigNumberish, currentPrice: BigNumberish],
    [void],
    "payable"
  >;

  claim: TypedContractMethod<[day: BigNumberish], [void], "nonpayable">;

  claimAll: TypedContractMethod<[], [void], "nonpayable">;

  claimed: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;

  collect: TypedContractMethod<[], [void], "nonpayable">;

  createFirstDay: TypedContractMethod<[], [bigint], "view">;

  createOnDay: TypedContractMethod<[day: BigNumberish], [bigint], "view">;

  createPerDay: TypedContractMethod<[], [bigint], "view">;

  dailyTotals: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  dayFor: TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;

  foundersAllocation: TypedContractMethod<[], [bigint], "view">;

  foundersKey: TypedContractMethod<[], [string], "view">;

  freeze: TypedContractMethod<[], [void], "nonpayable">;

  getCurrentPriceFloor: TypedContractMethod<
    [day: BigNumberish],
    [bigint],
    "view"
  >;

  initialize: TypedContractMethod<[_lux: AddressLike], [void], "nonpayable">;

  keys: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  localTime: TypedContractMethod<[], [bigint], "view">;

  numberOfDays: TypedContractMethod<[], [bigint], "view">;

  openTime: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  priceIncreaseRate: TypedContractMethod<[], [bigint], "view">;

  register: TypedContractMethod<[key: string], [void], "nonpayable">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  startTime: TypedContractMethod<[], [bigint], "view">;

  time: TypedContractMethod<[], [bigint], "view">;

  today: TypedContractMethod<[], [bigint], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  userBuys: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "LUX"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addTime"
  ): TypedContractMethod<[extra: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "basePrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "buy"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "buyWithLimit"
  ): TypedContractMethod<
    [day: BigNumberish, limit: BigNumberish, currentPrice: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[day: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimAll"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimed"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "collect"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createFirstDay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "createOnDay"
  ): TypedContractMethod<[day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "createPerDay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "dailyTotals"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "dayFor"
  ): TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "foundersAllocation"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "foundersKey"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "freeze"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getCurrentPriceFloor"
  ): TypedContractMethod<[day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_lux: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "keys"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "localTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "numberOfDays"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "openTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceIncreaseRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<[key: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "time"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "today"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userBuys"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  getEvent(
    key: "LogBuy"
  ): TypedContractEvent<
    LogBuyEvent.InputTuple,
    LogBuyEvent.OutputTuple,
    LogBuyEvent.OutputObject
  >;
  getEvent(
    key: "LogClaim"
  ): TypedContractEvent<
    LogClaimEvent.InputTuple,
    LogClaimEvent.OutputTuple,
    LogClaimEvent.OutputObject
  >;
  getEvent(
    key: "LogCollect"
  ): TypedContractEvent<
    LogCollectEvent.InputTuple,
    LogCollectEvent.OutputTuple,
    LogCollectEvent.OutputObject
  >;
  getEvent(
    key: "LogFreeze"
  ): TypedContractEvent<
    LogFreezeEvent.InputTuple,
    LogFreezeEvent.OutputTuple,
    LogFreezeEvent.OutputObject
  >;
  getEvent(
    key: "LogRegister"
  ): TypedContractEvent<
    LogRegisterEvent.InputTuple,
    LogRegisterEvent.OutputTuple,
    LogRegisterEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "LogBuy(uint256,address,uint256)": TypedContractEvent<
      LogBuyEvent.InputTuple,
      LogBuyEvent.OutputTuple,
      LogBuyEvent.OutputObject
    >;
    LogBuy: TypedContractEvent<
      LogBuyEvent.InputTuple,
      LogBuyEvent.OutputTuple,
      LogBuyEvent.OutputObject
    >;

    "LogClaim(uint256,address,uint256)": TypedContractEvent<
      LogClaimEvent.InputTuple,
      LogClaimEvent.OutputTuple,
      LogClaimEvent.OutputObject
    >;
    LogClaim: TypedContractEvent<
      LogClaimEvent.InputTuple,
      LogClaimEvent.OutputTuple,
      LogClaimEvent.OutputObject
    >;

    "LogCollect(uint256)": TypedContractEvent<
      LogCollectEvent.InputTuple,
      LogCollectEvent.OutputTuple,
      LogCollectEvent.OutputObject
    >;
    LogCollect: TypedContractEvent<
      LogCollectEvent.InputTuple,
      LogCollectEvent.OutputTuple,
      LogCollectEvent.OutputObject
    >;

    "LogFreeze()": TypedContractEvent<
      LogFreezeEvent.InputTuple,
      LogFreezeEvent.OutputTuple,
      LogFreezeEvent.OutputObject
    >;
    LogFreeze: TypedContractEvent<
      LogFreezeEvent.InputTuple,
      LogFreezeEvent.OutputTuple,
      LogFreezeEvent.OutputObject
    >;

    "LogRegister(address,string)": TypedContractEvent<
      LogRegisterEvent.InputTuple,
      LogRegisterEvent.OutputTuple,
      LogRegisterEvent.OutputObject
    >;
    LogRegister: TypedContractEvent<
      LogRegisterEvent.InputTuple,
      LogRegisterEvent.OutputTuple,
      LogRegisterEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}