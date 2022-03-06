"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenz__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addMinterByOwner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "tos",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "bulkTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "user",
                type: "address",
            },
            {
                name: "status",
                type: "bool",
            },
        ],
        name: "setBlacklist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_transferListener",
                type: "address",
            },
        ],
        name: "setTransferListener",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "fromId",
                type: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mintBatch",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenByIndex",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "transferListener",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_baseURI",
                type: "string",
            },
        ],
        name: "setBaseURI",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
        ],
        name: "tokensOfOwner",
        outputs: [
            {
                name: "",
                type: "uint256[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_symbol",
                type: "string",
            },
        ],
        name: "setSymbol",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_name",
                type: "string",
            },
        ],
        name: "setName",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "blacklist",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "name",
                type: "string",
            },
        ],
        name: "SetName",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "symbol",
                type: "string",
            },
        ],
        name: "SetSymbol",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "baseURI",
                type: "string",
            },
        ],
        name: "SetBaseURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "transferListener",
                type: "address",
            },
        ],
        name: "SetTransferListener",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                name: "status",
                type: "bool",
            },
        ],
        name: "SetBlacklist",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x60c0604052600460808190527f54454e5a0000000000000000000000000000000000000000000000000000000060a0908152620000409160109190620004f7565b506040805180820190915260048082527f54454e5a0000000000000000000000000000000000000000000000000000000060209092019182526200008791601191620004f7565b5060408051808201909152601d8082527f68747470733a2f2f6170692e6d696e7474656e7a2e636f6d2f6e66742f0000006020909201918252620000ce91601291620004f7565b50604080516020808201835260008083528351918201845280825280546001600160a01b0319163317808255935192939192849284926001600160a01b0391909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36200014e6301ffc9a760e01b6200025a60201b60201c565b620001666380ac58cd60e01b6200025a60201b60201c565b6200017e63780e9d6360e01b6200025a60201b60201c565b81516200019390600a906020850190620004f7565b508051620001a990600b906020840190620004f7565b50620001c2635b5e139f60e01b6200025a60201b60201c565b50505050620001d7336200032c60201b60201c565b620001ef63eab83e2060e01b6200025a60201b60201c565b620002076342966c6860e01b6200025a60201b60201c565b62000218336200037e60201b60201c565b600f805460ff19169055620002547f4d5507ff000000000000000000000000000000000000000000000000000000006200025a602090811b901c565b6200059c565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620002ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152600160208190526040909120805460ff19169091179055565b6200034781600d620003d060201b6200265e1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200039981600e620003d060201b6200265e1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b620003e282826200047460201b60201c565b156200044f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620004d7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620039c76022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200053a57805160ff19168380011785556200056a565b828001600101855582156200056a579182015b828111156200056a5782518255916020019190600101906200054d565b50620005789291506200057c565b5090565b6200059991905b8082111562000578576000815560010162000583565b90565b61341b80620005ac6000396000f3fe608060405234801561001057600080fd5b506004361061027f5760003560e01c80635c975abb1161015c57806395d89b41116100ce578063b88d4fde11610087578063b88d4fde1461091b578063c47f0027146109df578063c87b56dd14610a4d578063e985e9c514610a6a578063f2fde38b14610a98578063f9f92be414610abe5761027f565b806395d89b4114610823578063983b2d561461082b5780639865027514610851578063a22cb46514610859578063aa271e1a14610887578063b84c8246146108ad5761027f565b8063715018a611610120578063715018a61461076757806382dc1ec41461076f5780638456cb59146107955780638462151c1461079d5780638da5cb5b146108135780638f32d59b1461081b5761027f565b80635c975abb1461070c5780636352211e146107145780636c0360eb146107315780636ef8d66d1461073957806370a08231146107415761027f565b80632f745c59116101f557806342966c68116101b957806342966c681461061957806346fbf68e146106365780634f558e791461065c5780634f6ccce714610679578063538ee0071461069657806355f804b31461069e5761027f565b80632f745c591461055d5780633092afd5146105895780633f4ba83a146105af57806340c10f19146105b757806342842e0e146105e35761027f565b8063153a1f3e11610247578063153a1f3e146103c9578063153b0d1e1461048757806318160ddd146104b55780632376bf3f146104cf57806323b872dd146104f55780632e81aaea1461052b5761027f565b806301ffc9a71461028457806306fdde03146102bf578063081812fc1461033c578063095ea7b3146103755780630b3664bb146103a3575b600080fd5b6102ab6004803603602081101561029a57600080fd5b50356001600160e01b031916610ae4565b604080519115158252519081900360200190f35b6102c7610b07565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103015781810151838201526020016102e9565b50505050905090810190601f16801561032e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103596004803603602081101561035257600080fd5b5035610b95565b604080516001600160a01b039092168252519081900360200190f35b6103a16004803603604081101561038b57600080fd5b506001600160a01b038135169060200135610bfa565b005b6103a1600480360360208110156103b957600080fd5b50356001600160a01b0316610c59565b6103a1600480360360408110156103df57600080fd5b810190602081018135600160201b8111156103f957600080fd5b82018360208201111561040b57600080fd5b803590602001918460208302840111600160201b8311171561042c57600080fd5b919390929091602081019035600160201b81111561044957600080fd5b82018360208201111561045b57600080fd5b803590602001918460208302840111600160201b8311171561047c57600080fd5b509092509050610caf565b6103a16004803603604081101561049d57600080fd5b506001600160a01b0381351690602001351515610d54565b6104bd610e02565b60408051918252519081900360200190f35b6103a1600480360360208110156104e557600080fd5b50356001600160a01b0316610e09565b6103a16004803603606081101561050b57600080fd5b506001600160a01b03813581169160208101359091169060400135610ea7565b6103a16004803603606081101561054157600080fd5b506001600160a01b038135169060208101359060400135610f08565b6104bd6004803603604081101561057357600080fd5b506001600160a01b038135169060200135610fc5565b6103a16004803603602081101561059f57600080fd5b50356001600160a01b0316611047565b6103a161109a565b6102ab600480360360408110156105cd57600080fd5b506001600160a01b03813516906020013561117a565b6103a1600480360360608110156105f957600080fd5b506001600160a01b038135811691602081013590911690604001356111d6565b6103a16004803603602081101561062f57600080fd5b50356111f1565b6102ab6004803603602081101561064c57600080fd5b50356001600160a01b0316611242565b6102ab6004803603602081101561067257600080fd5b503561125b565b6104bd6004803603602081101561068f57600080fd5b5035611266565b6103596112cf565b6103a1600480360360208110156106b457600080fd5b810190602081018135600160201b8111156106ce57600080fd5b8201836020820111156106e057600080fd5b803590602001918460018302840111600160201b8311171561070157600080fd5b5090925090506112de565b6102ab611399565b6103596004803603602081101561072a57600080fd5b50356113a2565b6102c76113f9565b6103a1611454565b6104bd6004803603602081101561075757600080fd5b50356001600160a01b031661145f565b6103a16114ca565b6103a16004803603602081101561078557600080fd5b50356001600160a01b031661155e565b6103a16115ae565b6107c3600480360360208110156107b357600080fd5b50356001600160a01b0316611688565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156107ff5781810151838201526020016107e7565b505050509050019250505060405180910390f35b6103596116e9565b6102ab6116f8565b6102c7611709565b6103a16004803603602081101561084157600080fd5b50356001600160a01b0316611764565b6103a16117ab565b6103a16004803603604081101561086f57600080fd5b506001600160a01b03813516906020013515156117b4565b6102ab6004803603602081101561089d57600080fd5b50356001600160a01b031661180f565b6103a1600480360360208110156108c357600080fd5b810190602081018135600160201b8111156108dd57600080fd5b8201836020820111156108ef57600080fd5b803590602001918460018302840111600160201b8311171561091057600080fd5b509092509050611822565b6103a16004803603608081101561093157600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561096b57600080fd5b82018360208201111561097d57600080fd5b803590602001918460018302840111600160201b8311171561099e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506118dd945050505050565b6103a1600480360360208110156109f557600080fd5b810190602081018135600160201b811115610a0f57600080fd5b820183602082011115610a2157600080fd5b803590602001918460018302840111600160201b83111715610a4257600080fd5b509092509050611932565b6102c760048036036020811015610a6357600080fd5b50356119ed565b6102ab60048036036040811015610a8057600080fd5b506001600160a01b0381358116916020013516611c58565b6103a160048036036020811015610aae57600080fd5b50356001600160a01b0316611c86565b6102ab60048036036020811015610ad457600080fd5b50356001600160a01b0316611cd9565b6001600160e01b0319811660009081526001602052604090205460ff165b919050565b6010805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b820191906000526020600020905b815481529060010190602001808311610b7057829003601f168201915b505050505081565b6000610ba082611cee565b610bde57604051600160e51b62461bcd02815260040180806020018281038252602b815260200180613363602b913960400191505060405180910390fd5b506000908152600360205260409020546001600160a01b031690565b600f5460ff1615610c4b5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610c558282611d0b565b5050565b610c616116f8565b610ca35760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b610cac81611e38565b50565b600f5460ff1615610d005760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b8060005b81811015610d4c57610d4433878784818110610d1c57fe5b905060200201356001600160a01b0316868685818110610d3857fe5b90506020020135610ea7565b600101610d04565b505050505050565b610d5c6116f8565b610d9e5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b6001600160a01b038216600081815260146020908152604091829020805460ff191685151590811790915582519384529083015280517ffed07c88bd5d31bfd0ce77ed7ffdc74a163a61cfc5edcec801e3a7954e33d6e79281900390910190a15050565b6008545b90565b610e116116f8565b610e535760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b601380546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fa237096100edd6f07bf704028d12450ee445396df93b454a9b03e30529c21f2d9181900360200190a150565b600f5460ff1615610ef85760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610f03838383611e80565b505050565b610f113361180f565b610f4f57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806131796030913960400191505060405180910390fd5b600f5460ff1615610fa05760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b60005b81811015610fbf57610fb784828501611ed3565b600101610fa3565b50505050565b6000610fd08361145f565b821061101057604051600160e51b62461bcd02815260040180806020018281038252602a81526020018061314f602a913960400191505060405180910390fd5b6001600160a01b038316600090815260066020526040902080548390811061103457fe5b9060005260206000200154905092915050565b61104f6116f8565b6110915760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b610cac81611ef0565b6110a333611242565b6110e157604051600160e51b62461bcd0281526004018080602001828103825260308152602001806130d66030913960400191505060405180910390fd5b600f5460ff1661113b5760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600f805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b60006111853361180f565b6111c357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806131796030913960400191505060405180910390fd5b6111cd8383611ed3565b50600192915050565b610f03838383604051806020016040528060008152506118dd565b6111fb3382611f38565b61123957604051600160e51b62461bcd02815260040180806020018281038252602f815260200180613294602f913960400191505060405180910390fd5b610cac81611fdf565b6000611255600e8363ffffffff611ff116565b92915050565b600061125582611cee565b6000611270610e02565b82106112b057604051600160e51b62461bcd02815260040180806020018281038252602b815260200180613314602b913960400191505060405180910390fd5b600882815481106112bd57fe5b90600052602060002001549050919050565b6013546001600160a01b031681565b6112e66116f8565b6113285760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b61133460128383612fab565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b600f5460ff1690565b6000818152600260205260408120546001600160a01b03168061125557604051600160e51b62461bcd0281526004018080602001828103825260288152602001806131ca6028913960400191505060405180910390fd5b6012805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b61145d3361205b565b565b60006001600160a01b0382166114a957604051600160e51b62461bcd0281526004018080602001828103825260298152602001806132c36029913960400191505060405180910390fd5b6001600160a01b0382166000908152600460205260409020611255906120a3565b6114d26116f8565b6115145760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61156733611242565b6115a557604051600160e51b62461bcd0281526004018080602001828103825260308152602001806130d66030913960400191505060405180910390fd5b610cac816120a7565b6115b733611242565b6115f557604051600160e51b62461bcd0281526004018080602001828103825260308152602001806130d66030913960400191505060405180910390fd5b600f5460ff16156116465760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b600f805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b6060611693826120ef565b8054806020026020016040519081016040528092919081815260200182805480156116dd57602002820191906000526020600020905b8154815260200190600101908083116116c9575b50505050509050919050565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b6011805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610b8d5780601f10610b6257610100808354040283529160200191610b8d565b61176d3361180f565b610ca357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806131796030913960400191505060405180910390fd5b61145d33611ef0565b600f5460ff16156118055760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610c558282612109565b6000611255600d8363ffffffff611ff116565b61182a6116f8565b61186c5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b61187860118383612fab565b507fadf3ae8bd543b3007d464f15cb8ea1db3f44e84d41d203164f40b95e27558ac6828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b6118e8848484610ea7565b6118f4848484846121d8565b610fbf57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806132646030913960400191505060405180910390fd5b61193a6116f8565b61197c5760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b61198860108383612fab565b507f4df9dcd34ae35f40f2c756fd8ac83210ed0b76d065543ee73d868aec7c7fcf02828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a15050565b60606119f882611cee565b611a3657604051600160e51b62461bcd02815260040180806020018281038252602e8152602001806130a8602e913960400191505060405180910390fd5b81611ac55760126040516020018082805460018160011615610100020316600290048015611a9b5780601f10611a79576101008083540402835291820191611a9b565b820191906000526020600020905b815481529060010190602001808311611a87575b505080600160fc1b6003028152506001019150506040516020818303038152906040529050610b02565b60608260005b8115611adf57600101600a82049150611acb565b6060816040519080825280601f01601f191660200182016040528015611b0c576020820181803883390190505b5090505b8515611b555760001990910190600a860660300160f81b818381518110611b3357fe5b60200101906001600160f81b031916908160001a905350600a86049550611b10565b8093506000601280546001816001161561010002031660029004905011611b8b5760405180602001604052806000815250611c4e565b6012846040516020018083805460018160011615610100020316600290048015611bec5780601f10611bca576101008083540402835291820191611bec565b820191906000526020600020905b815481529060010190602001808311611bd8575b5050825160208401908083835b60208310611c185780518252601f199092019160209182019101611bf9565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040525b9695505050505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b611c8e6116f8565b611cd05760408051600160e51b62461bcd0281526020600482018190526024820152600080516020613222833981519152604482015290519081900360640190fd5b610cac816125bb565b60146020526000908152604090205460ff1681565b6000908152600260205260409020546001600160a01b0316151590565b6000611d16826113a2565b9050806001600160a01b0316836001600160a01b03161415611d825760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b0382161480611d9e5750611d9e8133611c58565b611ddc57604051600160e51b62461bcd02815260040180806020018281038252603781526020018061338e6037913960400191505060405180910390fd5b60008281526003602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b611e49600d8263ffffffff61265e16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b611e8a3382611f38565b611ec857604051600160e51b62461bcd0281526004018080602001828103825260308152602001806131f26030913960400191505060405180910390fd5b610f038383836126e2565b611edd82826127fc565b611ee78282612933565b610c5581612971565b611f01600d8263ffffffff6129b516565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6000611f4382611cee565b611f8157604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806133c5602b913960400191505060405180910390fd5b6000611f8c836113a2565b9050806001600160a01b0316846001600160a01b03161480611fc75750836001600160a01b0316611fbc84610b95565b6001600160a01b0316145b80611fd75750611fd78185611c58565b949350505050565b610cac611feb826113a2565b82612a1f565b60006001600160a01b03821661203b57604051600160e51b62461bcd0281526004018080602001828103825260228152602001806132426022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61206c600e8263ffffffff6129b516565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b6120b8600e8263ffffffff61265e16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b0316600090815260066020526040902090565b6001600160a01b03821633141561216a5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b60008060606121ef866001600160a01b0316612a67565b6121fe57600192505050611fd7565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561228a578181015183820152602001612272565b50505050905090810190601f1680156122b75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b6020831061231f5780518252601f199092019160209182019101612300565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612381576040519150601f19603f3d011682016040523d82523d6000602084013e612386565b606091505b5080519193509150158015906123c657508051600160e11b630a85bd010290602080840191908110156123b857600080fd5b50516001600160e01b031916145b156123d657600192505050611fd7565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561246257818101518382015260200161244a565b50505050905090810190601f16801561248f5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106124f75780518252601f1990920191602091820191016124d8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612559576040519150601f19603f3d011682016040523d82523d6000602084013e61255e565b606091505b50805191935091501580159061259e57508051600160e01b636745782b02906020808401919081101561259057600080fd5b50516001600160e01b031916145b156125ae57600192505050611fd7565b5060009695505050505050565b6001600160a01b03811661260357604051600160e51b62461bcd0281526004018080602001828103825260268152602001806131066026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6126688282611ff1565b156126bd5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b03831660009081526014602052604090205460ff1615801561272457506001600160a01b03821660009081526014602052604090205460ff16155b6127675760408051600160e51b62461bcd0281526020600482015260096024820152600160ba1b6810931050d2d31254d502604482015290519081900360640190fd5b6013546001600160a01b0316156127f15760135460408051600160e31b6317d575990281526001600160a01b0386811660048301528581166024830152604482018590529151919092169163beabacc891606480830192600092919082900301818387803b1580156127d857600080fd5b505af11580156127ec573d6000803e3d6000fd5b505050505b610f03838383612a6d565b6001600160a01b03821661285a5760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61286381611cee565b156128b85760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260026020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558352600490915290206128f790612a8c565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526006602081815260408084208054868652600784529185208290559282526001810183559183529091200155565b600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6129bf8282611ff1565b6129fd57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806131a96021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b612a298282612a95565b6000818152600c60205260409020546002600019610100600184161502019091160415610c55576000818152600c60205260408120610c5591613029565b3b151590565b612a78838383612ac1565b612a828382612c0b565b610f038282612933565b80546001019055565b612a9f8282612d00565b612aa98282612c0b565b600081815260076020526040812055610c5581612dda565b826001600160a01b0316612ad4826113a2565b6001600160a01b031614612b1c57604051600160e51b62461bcd0281526004018080602001828103825260288152602001806132ec6028913960400191505060405180910390fd5b6001600160a01b038216612b6457604051600160e51b62461bcd02815260040180806020018281038252602381526020018061312c6023913960400191505060405180910390fd5b612b6d81612e76565b6001600160a01b0383166000908152600460205260409020612b8e90612eb1565b6001600160a01b0382166000908152600460205260409020612baf90612a8c565b60008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216600090815260066020526040812054612c3590600163ffffffff612ec816565b600083815260076020526040902054909150808214612cd0576001600160a01b0384166000908152600660205260408120805484908110612c7257fe5b906000526020600020015490508060066000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110612cb057fe5b600091825260208083209091019290925591825260079052604090208190555b6001600160a01b0384166000908152600660205260409020805490612cf990600019830161306d565b5050505050565b816001600160a01b0316612d13826113a2565b6001600160a01b031614612d5b57604051600160e51b62461bcd02815260040180806020018281038252602481526020018061333f6024913960400191505060405180910390fd5b612d6481612e76565b6001600160a01b0382166000908152600460205260409020612d8590612eb1565b60008181526002602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600854600090612df190600163ffffffff612ec816565b60008381526009602052604081205460088054939450909284908110612e1357fe5b906000526020600020015490508060088381548110612e2e57fe5b60009182526020808320909101929092558281526009909152604090208290556008805490612e6190600019830161306d565b50505060009182525060096020526040812055565b6000818152600360205260409020546001600160a01b031615610cac57600090815260036020526040902080546001600160a01b0319169055565b8054612ec490600163ffffffff612ec816565b9055565b6000612f0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612f11565b9392505050565b60008184841115612fa357604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612f68578181015183820152602001612f50565b50505050905090810190601f168015612f955780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612fec5782800160ff19823516178555613019565b82800160010185558215613019579182015b82811115613019578235825591602001919060010190612ffe565b5061302592915061308d565b5090565b50805460018160011615610100020316600290046000825580601f1061304f5750610cac565b601f016020900490600052602060002090810190610cac919061308d565b815481835581811115610f0357600083815260209020610f039181019083015b610e0691905b80821115613025576000815560010161309356fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a72305820141359d14c8b251feb68d5ac9173a77dc6598c2bb7e07946683bbba572b6d00a0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class Tenz__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "Tenz";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Tenz__factory = Tenz__factory;
Tenz__factory.bytecode = _bytecode;
Tenz__factory.abi = _abi;
//# sourceMappingURL=Tenz__factory.js.map