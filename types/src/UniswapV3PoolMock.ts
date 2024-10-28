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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface UniswapV3PoolMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "mockPrice"
      | "observe"
      | "setMockPrice"
      | "slot0"
      | "token0"
      | "token1"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "mockPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observe",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMockPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(functionFragment: "mockPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMockPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}

export interface UniswapV3PoolMock extends BaseContract {
  connect(runner?: ContractRunner | null): UniswapV3PoolMock;
  waitForDeployment(): Promise<this>;

  interface: UniswapV3PoolMockInterface;

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

  mockPrice: TypedContractMethod<[], [bigint], "view">;

  observe: TypedContractMethod<
    [secondsAgos: BigNumberish[]],
    [
      [bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulativeX128s: bigint[];
      }
    ],
    "view"
  >;

  setMockPrice: TypedContractMethod<
    [_mockPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  slot0: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, boolean] & {
        sqrtPriceX96: bigint;
        tick: bigint;
        observationIndex: bigint;
        observationCardinality: bigint;
        observationCardinalityNext: bigint;
        feeProtocol: bigint;
        unlocked: boolean;
      }
    ],
    "view"
  >;

  token0: TypedContractMethod<[], [string], "view">;

  token1: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "mockPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "observe"
  ): TypedContractMethod<
    [secondsAgos: BigNumberish[]],
    [
      [bigint[], bigint[]] & {
        tickCumulatives: bigint[];
        secondsPerLiquidityCumulativeX128s: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "setMockPrice"
  ): TypedContractMethod<[_mockPrice: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "slot0"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, boolean] & {
        sqrtPriceX96: bigint;
        tick: bigint;
        observationIndex: bigint;
        observationCardinality: bigint;
        observationCardinalityNext: bigint;
        feeProtocol: bigint;
        unlocked: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "token0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token1"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
