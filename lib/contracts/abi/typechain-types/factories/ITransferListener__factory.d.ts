import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITransferListener, ITransferListenerInterface } from "../ITransferListener";
export declare class ITransferListener__factory {
    static readonly abi: {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ITransferListenerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITransferListener;
}
//# sourceMappingURL=ITransferListener__factory.d.ts.map