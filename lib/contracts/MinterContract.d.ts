import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
export default class MinterContract extends Contract {
    constructor(addr: string);
    wlprice(): Promise<BigNumber>;
    price(): Promise<BigNumber>;
    calculatedPrice(): Promise<BigNumber>;
    step(): Promise<BigNumber>;
    amount(): Promise<BigNumber>;
    mint(count: number): Promise<void>;
}
//# sourceMappingURL=MinterContract.d.ts.map