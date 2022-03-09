import { View, ViewParams } from "skyrouter";
export default class Home implements View {
    private TODAY_COUNT;
    private container;
    private interval;
    private walletAddress;
    private priceDisplay;
    private klayBalance;
    private whitelistBalance;
    private mintCount;
    private remainsCount;
    private bar;
    private _minterContract;
    constructor();
    private getMinterContract;
    private loadBalance;
    private progress;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Home.d.ts.map