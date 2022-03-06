import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TenzMinterInterface extends utils.Interface {
    contractName: "TenzMinter";
    functions: {
        "feeTo()": FunctionFragment;
        "setAmount(uint256)": FunctionFragment;
        "fromId()": FunctionFragment;
        "whitelist3(address)": FunctionFragment;
        "setWhitelist1(address[])": FunctionFragment;
        "nft()": FunctionFragment;
        "setFromId(uint256)": FunctionFragment;
        "whitelist2(uint256)": FunctionFragment;
        "setLimitPerTransaction(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setStep(uint256,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "setPrice(uint256)": FunctionFragment;
        "price()": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "amount()": FunctionFragment;
        "setWhitelist3(address[],uint256[])": FunctionFragment;
        "whitelist1(uint256)": FunctionFragment;
        "limitPerTransaction()": FunctionFragment;
        "wlprice()": FunctionFragment;
        "step()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "setFeeTo(address)": FunctionFragment;
        "setWLPrice(uint256)": FunctionFragment;
        "setWhitelist2(address[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fromId", values?: undefined): string;
    encodeFunctionData(functionFragment: "whitelist3", values: [string]): string;
    encodeFunctionData(functionFragment: "setWhitelist1", values: [string[]]): string;
    encodeFunctionData(functionFragment: "nft", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFromId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelist2", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLimitPerTransaction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setStep", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "price", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "amount", values?: undefined): string;
    encodeFunctionData(functionFragment: "setWhitelist3", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "whitelist1", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "limitPerTransaction", values?: undefined): string;
    encodeFunctionData(functionFragment: "wlprice", values?: undefined): string;
    encodeFunctionData(functionFragment: "step", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "setWLPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWhitelist2", values: [string[]]): string;
    decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFromId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimitPerTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "limitPerTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wlprice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWLPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist2", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TenzMinter extends BaseContract {
    contractName: "TenzMinter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TenzMinterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        feeTo(overrides?: CallOverrides): Promise<[string]>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fromId(overrides?: CallOverrides): Promise<[BigNumber]>;
        whitelist3(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setWhitelist1(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nft(overrides?: CallOverrides): Promise<[string]>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist2(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStep(_step: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        price(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        amount(overrides?: CallOverrides): Promise<[BigNumber]>;
        setWhitelist3(addrs: string[], counts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist1(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        limitPerTransaction(overrides?: CallOverrides): Promise<[BigNumber]>;
        wlprice(overrides?: CallOverrides): Promise<[BigNumber]>;
        step(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWLPrice(_wlprice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWhitelist2(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    feeTo(overrides?: CallOverrides): Promise<string>;
    setAmount(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fromId(overrides?: CallOverrides): Promise<BigNumber>;
    whitelist3(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    setWhitelist1(addrs: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nft(overrides?: CallOverrides): Promise<string>;
    setFromId(_fromId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist2(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStep(_step: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    setPrice(_price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    price(overrides?: CallOverrides): Promise<BigNumber>;
    mint(count: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    amount(overrides?: CallOverrides): Promise<BigNumber>;
    setWhitelist3(addrs: string[], counts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist1(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
    wlprice(overrides?: CallOverrides): Promise<BigNumber>;
    step(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFeeTo(_feeTo: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWLPrice(_wlprice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWhitelist2(addrs: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        feeTo(overrides?: CallOverrides): Promise<string>;
        setAmount(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fromId(overrides?: CallOverrides): Promise<BigNumber>;
        whitelist3(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist1(addrs: string[], overrides?: CallOverrides): Promise<void>;
        nft(overrides?: CallOverrides): Promise<string>;
        setFromId(_fromId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        whitelist2(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setStep(_step: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        setPrice(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;
        price(overrides?: CallOverrides): Promise<BigNumber>;
        mint(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        amount(overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist3(addrs: string[], counts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        whitelist1(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
        wlprice(overrides?: CallOverrides): Promise<BigNumber>;
        step(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;
        setWLPrice(_wlprice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWhitelist2(addrs: string[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        feeTo(overrides?: CallOverrides): Promise<BigNumber>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fromId(overrides?: CallOverrides): Promise<BigNumber>;
        whitelist3(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist1(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nft(overrides?: CallOverrides): Promise<BigNumber>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist2(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStep(_step: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        price(overrides?: CallOverrides): Promise<BigNumber>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        amount(overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist3(addrs: string[], counts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist1(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;
        wlprice(overrides?: CallOverrides): Promise<BigNumber>;
        step(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWLPrice(_wlprice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWhitelist2(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAmount(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fromId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelist3(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setWhitelist1(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFromId(_fromId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist2(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setLimitPerTransaction(_limitPerTransaction: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStep(_step: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPrice(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(count: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setWhitelist3(addrs: string[], counts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist1(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        limitPerTransaction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wlprice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        step(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFeeTo(_feeTo: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWLPrice(_wlprice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWhitelist2(addrs: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TenzMinter.d.ts.map