import { BodyNode, DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import CommonUtil from "../CommonUtil";
import MinterContract from "../contracts/MinterContract";
import TenzContract from "../contracts/TenzContract";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";

export default class Home implements View {

    private TODAY_COUNT = 9500;

    private container: DomNode;
    private interval: any;

    private walletAddress: DomNode;
    private priceDisplay: DomNode;
    private klayBalance: DomNode;
    private whitelistBalance: DomNode;
    private mintCount: DomNode;
    private remainsCount: DomNode;
    private bar: DomNode;

    private _minterContract = new MinterContract("0xA94805216D215892AA8645c52197bf56B84923Bf");

    constructor() {
        document.title = "TENZ";

        BodyNode.append(
            (this.container = el(".home-view",
                el("header",
                    el("img.logo", { src: "/images/logo.png", alt: "TENZ LOGO" }),
                    el(".right",
                        el(".sns",
                            el("a",
                                el("img", { src: "/images/icn/opensea.png", alt: "opensea" }),
                                {
                                    href: "https://opensea.io/collection/tenzofficial",
                                    target: "_blank",
                                },
                            ),
                            el("a",
                                el("img", { src: "/images/icn/linktree.png", alt: "linktree" }),
                                {
                                    href: "https://linktr.ee/luckytenz",
                                    target: "_blank",
                                },
                            ),
                        ),
                        el(".address-container",
                            el("img", { src: "/images/icn/klaytn.png", alt: "klaytn" }),
                            this.walletAddress = el(".address",),
                        ),
                    ),
                ),
                el("main",
                    el("section",
                        el("header",
                            el(".price-container",
                                el("p", "????????????"),
                                this.priceDisplay = el(".price", "..."),
                                el("p", "Klay"),
                            ),
                            el(".my-container",
                                el(".whitelist-container",
                                    el("p", "?????? ??????????????????"),
                                    this.whitelistBalance = el(".info", "..."),
                                ),
                                el(".klay-container",
                                    el("p", "?????? Klay"),
                                    this.klayBalance = el(".info", "0"),
                                )
                            ),
                        ),
                        el("article",
                            el("hr"),
                            el(".amount-container",
                                el("p", "????????? ?????? / ??? ?????? ??????"),
                                this.mintCount = el(".info", `... / ${this.TODAY_COUNT}`),
                            ),
                            el(".amount-container",
                                el("p", "????????????"),
                                this.remainsCount = el(".info", "..."),
                            ),
                            el(".progress-container",
                                el(".progress",
                                    this.bar = el(".progress__bar"),
                                ),
                                el(".status-container",
                                    el("p", "1???"),
                                    el(".vertical-hr"),
                                    el("p", "2???"),
                                    el(".vertical-hr"),
                                    el("p", "3???"),
                                    el(".vertical-hr"),
                                    el("p", "?????????"),
                                ),
                            ),
                            el("hr"),
                            el(".action-container",
                                el(".text-container",
                                    el("p", "???????????????"),
                                    el(".info", "1"),
                                    el("p", "???"),
                                ),
                                el("button", "MINT", {
                                    click: async () => {
                                        await (await this.getMinterContract()).mint(1);
                                    },
                                }),
                            ),
                        ),
                    ),
                ),
            ))
        );

        Wallet.on("connect", () => this.loadBalance());
        this.interval = setInterval(() => this.progress(), 1000);
        this.progress();
    }

    private async getMinterContract() {
        return this._minterContract;
    }

    private async loadBalance() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText(CommonUtil.shortenAddress(address));

            const minterContract = await this.getMinterContract();

            const price = await minterContract.calculatedPrice();
            this.priceDisplay.empty().appendText(String(parseInt(utils.formatEther(price), 10)));

            const balance = await Klaytn.balanceOf(address);
            let balanceDisplay = utils.formatEther(balance!)
            balanceDisplay = (+balanceDisplay).toFixed(4);
            this.klayBalance.empty().appendText(balanceDisplay);

            const whitelist = (await superagent.get(`https://api.minttenz.com/wl/${address}`)).body.wl;
            this.whitelistBalance.empty().appendText(`${whitelist}`)
        }
    }

    private async progress() {
        this.loadBalance();

        const remains = this.TODAY_COUNT + 500 - (await TenzContract.totalSupply()).toNumber();
        this.remainsCount.empty().appendText(String(remains));

        const d = this.TODAY_COUNT - remains > this.TODAY_COUNT ? this.TODAY_COUNT : this.TODAY_COUNT - remains;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.mintCount.empty().appendText(`${d} / ${this.TODAY_COUNT}`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
