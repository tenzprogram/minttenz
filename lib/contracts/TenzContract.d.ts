import { BigNumber } from "ethers";
import KIP17Contract from "./standard/KIP17Contract";
declare class TenzContract extends KIP17Contract {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: TenzContract;
export default _default;
//# sourceMappingURL=TenzContract.d.ts.map