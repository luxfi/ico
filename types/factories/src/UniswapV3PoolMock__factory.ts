/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  UniswapV3PoolMock,
  UniswapV3PoolMockInterface,
} from "../../src/UniswapV3PoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "mockPrice",
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
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickCumulatives",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        type: "uint160[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mockPrice",
        type: "uint256",
      },
    ],
    name: "setMockPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    inputs: [],
    name: "token1",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103923803806103928339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b031991821617909155600180549390921692169190911790556103188061007a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630dfe16811461005c578063883bdbfd14610080578063c7207e7414610189578063d21220a7146101a3578063feca9cc0146101ab575b600080fd5b6100646101ca565b604080516001600160a01b039092168252519081900360200190f35b6100f06004803603602081101561009657600080fd5b8101906020810181356401000000008111156100b157600080fd5b8201836020820111156100c357600080fd5b803590602001918460208302840111640100000000831117156100e557600080fd5b5090925090506101d9565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561013457818101518382015260200161011c565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561017357818101518382015260200161015b565b5050505090500194505050505060405180910390f35b6101916102c8565b60408051918252519081900360200190f35b6100646102ce565b6101c8600480360360208110156101c157600080fd5b50356102dd565b005b6000546001600160a01b031681565b6060808267ffffffffffffffff811180156101f357600080fd5b5060405190808252806020026020018201604052801561021d578160200160208202803683370190505b5091508267ffffffffffffffff8111801561023757600080fd5b50604051908082528060200260200182016040528015610261578160200160208202803683370190505b50905060005b838110156102c05760025483828151811061027e57fe5b602002602001019060060b908160060b8152505060008282815181106102a057fe5b6001600160a01b0390921660209283029190910190910152600101610267565b509250929050565b60025481565b6001546001600160a01b031681565b60025556fea264697066735822122027eb1f98a79e12b5717ef4d24e1f3486b45c2d9bd1cd0c46314d6b41e870bd2364736f6c63430007060033";

type UniswapV3PoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PoolMock__factory extends ContractFactory {
  constructor(...args: UniswapV3PoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token0: AddressLike,
    _token1: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token0, _token1, overrides || {});
  }
  override deploy(
    _token0: AddressLike,
    _token1: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token0, _token1, overrides || {}) as Promise<
      UniswapV3PoolMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UniswapV3PoolMock__factory {
    return super.connect(runner) as UniswapV3PoolMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PoolMockInterface {
    return new Interface(_abi) as UniswapV3PoolMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UniswapV3PoolMock {
    return new Contract(address, _abi, runner) as unknown as UniswapV3PoolMock;
  }
}
