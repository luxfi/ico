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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { LUXSale, LUXSaleInterface } from "../../src/LUXSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numberOfDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalWLUXForSale",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_openTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogAddToLUXLP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdValue",
        type: "uint256",
      },
    ],
    name: "LogBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "LogLiquidity",
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
    inputs: [],
    name: "WLUXToken",
    outputs: [
      {
        internalType: "contract WLUX",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "acceptedTokens",
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
        name: "window",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "convertToUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "usdValue",
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
        name: "windowIndex",
        type: "uint256",
      },
    ],
    name: "getWindowTotalUSD",
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
        internalType: "contract WLUX",
        name: "_wlux",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfDays",
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
    name: "openTime",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "setTokenWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenContributions",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenToPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "tokenWhitelist",
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
    name: "totalWLUXForSale",
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
        name: "window",
        type: "uint256",
      },
    ],
    name: "unsoldTokens",
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
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userBuys",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userContributionsUSD",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userTotalContributedUSD",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "windowTotals",
    outputs: [
      {
        internalType: "uint256",
        name: "totalUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unsoldWLUX",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611b14380380611b148339818101604052608081101561003357600080fd5b50805160208201516040830151606090930151919290916000610054610160565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060018055836100f4576040805162461bcd60e51b815260206004820152601660248201527f496e76616c6964206e756d626572206f66206461797300000000000000000000604482015290519081900360640190fd5b60008311610149576040805162461bcd60e51b815260206004820152601b60248201527f496e76616c696420746f74616c20574c555820666f722073616c650000000000604482015290519081900360640190fd5b600693909355600391909155600455600555610164565b3390565b6119a1806101736000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806389cadac6116100c3578063c4d66de81161007c578063c4d66de81461046e578063c83f42f714610494578063d5bd73ad146104b1578063e9f6bd0b146104b9578063f08a25ed146104c1578063f2fde38b146104ed57610158565b806389cadac6146103c95780638da5cb5b146103e6578063989796b5146103ee578063a6da245b14610414578063ac51cef014610440578063b42568881461046657610158565b8063715018a611610115578063715018a6146102e5578063753d7563146102ed57806378e9792514610327578063794e56eb1461032f57806387b21efc146103655780638952ac1e1461039757610158565b80631d93b90d1461015d57806322f07ca01461018157806336c87754146101bf578063379607f5146101dc5780633904e1bf146101fb5780634297087114610227575b600080fd5b610165610513565b604080516001600160a01b039092168252519081900360200190f35b6101ad6004803603604081101561019757600080fd5b50803590602001356001600160a01b0316610522565b60408051918252519081900360200190f35b610165600480360360208110156101d557600080fd5b503561053f565b6101f9600480360360208110156101f257600080fd5b5035610569565b005b6101ad6004803603604081101561021157600080fd5b50803590602001356001600160a01b031661078d565b6101f96004803603604081101561023d57600080fd5b810190602081018135600160201b81111561025757600080fd5b82018360208201111561026957600080fd5b803590602001918460208302840111600160201b8311171561028a57600080fd5b919390929091602081019035600160201b8111156102a757600080fd5b8201836020820111156102b957600080fd5b803590602001918460208302840111600160201b831117156102da57600080fd5b5090925090506107b5565b6101f9610990565b6103136004803603602081101561030357600080fd5b50356001600160a01b0316610a3c565b604080519115158252519081900360200190f35b6101ad610a51565b61034c6004803603602081101561034557600080fd5b5035610a57565b6040805192835260208301919091528051918290030190f35b6101f96004803603606081101561037b57600080fd5b50803590602081013590604001356001600160a01b0316610a70565b6101f9600480360360608110156103ad57600080fd5b508035906001600160a01b036020820135169060400135610b78565b6101ad600480360360208110156103df57600080fd5b5035610ddc565b610165610dee565b6101656004803603602081101561040457600080fd5b50356001600160a01b0316610dfd565b6101ad6004803603604081101561042a57600080fd5b50803590602001356001600160a01b0316610e18565b6101ad6004803603602081101561045657600080fd5b50356001600160a01b0316610e35565b6101ad610e47565b6101f96004803603602081101561048457600080fd5b50356001600160a01b0316610e4d565b6101ad600480360360208110156104aa57600080fd5b5035610f25565b6101ad610f3a565b6101ad610f40565b6101ad600480360360408110156104d757600080fd5b506001600160a01b038135169060200135610f46565b6101f96004803603602081101561050357600080fd5b50356001600160a01b031661106a565b6002546001600160a01b031681565b600b60209081526000928352604080842090915290825290205481565b6007818154811061054f57600080fd5b6000918252602090912001546001600160a01b0316905081565b600260015414156105c1576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155600554620151808202014211610623576040805162461bcd60e51b815260206004820152601860248201527f436c61696d20706572696f64206e6f7420737461727465640000000000000000604482015290519081900360640190fd5b6000818152600b602090815260408083203384529091529020548061068f576040805162461bcd60e51b815260206004820152601960248201527f4e6f20636f6e747269627574696f6e7320746f20636c61696d00000000000000604482015290519081900360640190fd5b6000828152600a602052604081205460035490919082908402816106af57fe5b6002546040805163a9059cbb60e01b8152336004820152939092046024840181905291519193506001600160a01b03169163a9059cbb9160448083019260209291908290030181600087803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b505050506040513d602081101561073157600080fd5b50506000848152600b6020908152604080832033808552908352818420939093558051848152905187927f51223fdc0a25891366fb358b4af9fe3c381b1566e287c61a29d01c8a173fe4f4928290030190a35050600180555050565b6000918252600b602090815260408084206001600160a01b0393909316845291905290205490565b6107bd61116c565b6001600160a01b03166107ce610dee565b6001600160a01b031614610817576040805162461bcd60e51b8152602060048201819052602482015260008051602061194c833981519152604482015290519081900360640190fd5b82811461086b576040805162461bcd60e51b815260206004820181905260248201527f546f6b656e7320616e6420706f6f6c73206c656e677468206d69736d61746368604482015290519081900360640190fd5b60005b8381101561098957600785858381811061088457fe5b8354600180820186556000958652602080872090920180546001600160a01b0319166001600160a01b03949093029590950135929092161790925550906008908787858181106108d057fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555082828281811061092357fe5b905060200201356001600160a01b03166009600087878581811061094357fe5b6001600160a01b03602091820293909301358316845283019390935260409091016000208054939091166001600160a01b0319909316929092179091555060010161086e565b5050505050565b61099861116c565b6001600160a01b03166109a9610dee565b6001600160a01b0316146109f2576040805162461bcd60e51b8152602060048201819052602482015260008051602061194c833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60086020526000908152604090205460ff1681565b60055481565b600a602052600090815260409020805460019091015482565b610a7861116c565b6001600160a01b0316610a89610dee565b6001600160a01b031614610ad2576040805162461bcd60e51b8152602060048201819052602482015260008051602061194c833981519152604482015290519081900360640190fd5b6000610ade8284610f46565b6000858152600a6020908152604091829020600384046001909101558151868152915192935086927feae9a6e4add11532fe6a8b2bd185f162dfb5b5dc5942eacf56f0922f6b1022119281900390910190a2604080518481526001600160a01b0384166020820152815186927f813fd3d9726a1739c4111d69719e6f1fe75a168895050f03a2e2ae8f3ac45591928290030190a250505050565b60026001541415610bd0576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001556001600160a01b03821660009081526008602052604090205460ff16610c37576040805162461bcd60e51b8152602060048201526012602482015271151bdad95b881b9bdd081858d8d95c1d195960721b604482015290519081900360640190fd5b600454421015610c82576040805162461bcd60e51b815260206004820152601160248201527014d85b19481b9bdd081bdc195b881e595d607a1b604482015290519081900360640190fd5b826201518002600554014210610ccf576040805162461bcd60e51b815260206004820152600d60248201526c15da5b991bddc818db1bdcd959609a1b604482015290519081900360640190fd5b610cdb82333084611170565b6000610ce78383610f46565b905060008111610d32576040805162461bcd60e51b8152602060048201526011602482015270496e76616c6964205553442076616c756560781b604482015290519081900360640190fd5b6000848152600d602090815260408083206001600160a01b03871680855290835281842080548701905533808552600c8452828520805487019055888552600a8452828520805487019055600b845282852081865284529382902080548601905581519081529182018590528181018490525186917f88bbed39aa2f6cb0159e088e9a0a254f79fbf88e4dedef8bb7c1ca60eedfc19f919081900360600190a35050600180555050565b6000908152600a602052604090205490565b6000546001600160a01b031690565b6009602052600090815260409020546001600160a01b031681565b600d60209081526000928352604080842090915290825290205481565b600c6020526000908152604090205481565b60045481565b610e5561116c565b6001600160a01b0316610e66610dee565b6001600160a01b031614610eaf576040805162461bcd60e51b8152602060048201819052602482015260008051602061194c833981519152604482015290519081900360640190fd5b6002546001600160a01b031615610f03576040805162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000908152600a602052604090206001015490565b60035481565b60065481565b6001600160a01b0380831660009081526009602052604081205490911680610fae576040805162461bcd60e51b81526020600482015260166024820152752737903837b7b6103337b9103a3434b9903a37b5b2b760511b604482015290519081900360640190fd5b620151806000610fbe83836112c8565b905060006060826001600160a01b0316836001600160a01b031602901c90506000876001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561101857600080fd5b505afa15801561102c573d6000803e3d6000fd5b505050506040513d602081101561104257600080fd5b5051905060ff8116600a0a600160601b888402048161105d57fe5b0498975050505050505050565b61107261116c565b6001600160a01b0316611083610dee565b6001600160a01b0316146110cc576040805162461bcd60e51b8152602060048201819052602482015260008051602061194c833981519152604482015290519081900360640190fd5b6001600160a01b0381166111115760405162461bcd60e51b81526004018080602001828103825260268152602001806119266026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b178152925182516000948594938a169392918291908083835b602083106111f45780518252601f1990920191602091820191016111d5565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611256576040519150601f19603f3d011682016040523d82523d6000602084013e61125b565b606091505b5091509150818015611289575080511580611289575080806020019051602081101561128657600080fd5b50515b6112c0576040805162461bcd60e51b815260206004820152600360248201526229aa2360e91b604482015290519081900360640190fd5b505050505050565b600063ffffffff8216611322576040805162461bcd60e51b815260206004820152601a60248201527f5365636f6e64732061676f2063616e6e6f74206265207a65726f000000000000604482015290519081900360640190fd5b60408051600280825260608201835285926000929190602083019080368337019050509050838160008151811061135557fe5b602002602001019063ffffffff16908163ffffffff168152505060008160018151811061137e57fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516000936001600160a01b0387169363883bdbfd938793909283926044019185820191028083838b5b838110156113ef5781810151838201526020016113d7565b505050509050019250505060006040518083038186803b15801561141257600080fd5b505afa158015611426573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604090815281101561144f57600080fd5b8101908080516040519392919084600160201b82111561146e57600080fd5b90830190602082018581111561148357600080fd5b82518660208202830111600160201b8211171561149f57600080fd5b82525081516020918201928201910280838360005b838110156114cc5781810151838201526020016114b4565b5050505090500160405260200180516040519392919084600160201b8211156114f457600080fd5b90830190602082018581111561150957600080fd5b82518660208202830111600160201b8211171561152557600080fd5b82525081516020918201928201910280838360005b8381101561155257818101518382015260200161153a565b5050505090500160405250505050905060008160008151811061157157fe5b60200260200101518260018151811061158657fe5b6020026020010151039050600086905060008160030b60060b8360060b816115aa57fe5b05905060008360060b1280156115d457508160030b60060b8360060b816115cd57fe5b0760060b15155b156115de57600019015b6115e7816115f4565b9998505050505050505050565b60008060008360020b1261160b578260020b611613565b8260020b6000035b9050620d89e8811115611651576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b60006001821661166557600160801b611677565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156116ab576ffff97272373d413259a46990580e213a0260801c5b60048216156116ca576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156116e9576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611708576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611727576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611746576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611765576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611785576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156117a5576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156117c5576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156117e5576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611805576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611825576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611845576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611865576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611886576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156118a6576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156118c5576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156118e2576b048a170391f7dc42444e8fa20260801c5b60008460020b13156118fd5780600019816118f957fe5b0490505b600160201b810615611910576001611913565b60005b60ff16602082901c019250505091905056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220be67f70caf12d9b69a69e565c9dc51a4684246b248d70744654aef98e59f2d6264736f6c63430007060033";

type LUXSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LUXSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LUXSale__factory extends ContractFactory {
  constructor(...args: LUXSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _numberOfDays: BigNumberish,
    _totalWLUXForSale: BigNumberish,
    _openTime: BigNumberish,
    _startTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _numberOfDays,
      _totalWLUXForSale,
      _openTime,
      _startTime,
      overrides || {}
    );
  }
  override deploy(
    _numberOfDays: BigNumberish,
    _totalWLUXForSale: BigNumberish,
    _openTime: BigNumberish,
    _startTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _numberOfDays,
      _totalWLUXForSale,
      _openTime,
      _startTime,
      overrides || {}
    ) as Promise<
      LUXSale & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LUXSale__factory {
    return super.connect(runner) as LUXSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LUXSaleInterface {
    return new Interface(_abi) as LUXSaleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LUXSale {
    return new Contract(address, _abi, runner) as unknown as LUXSale;
  }
}
