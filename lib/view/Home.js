"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const MinterContract_1 = __importDefault(require("../contracts/MinterContract"));
const TenzContract_1 = __importDefault(require("../contracts/TenzContract"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Home {
    constructor() {
        this.TODAY_COUNT = 9500;
        this._minterContract = new MinterContract_1.default("0x4c36eD7Fd318163B19b23d136faCaA01970bE885");
        document.title = "TENZ";
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)("img.logo", { src: "/images/logo.png", alt: "TENZ LOGO" }), (0, skynode_1.el)(".right", (0, skynode_1.el)(".sns", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/icn/opensea.png", alt: "opensea" }), {
            href: "https://opensea.io/collection/tenzofficial",
            target: "_blank",
        }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/icn/linktree.png", alt: "linktree" }), {
            href: "https://linktr.ee/luckytenz",
            target: "_blank",
        })), (0, skynode_1.el)(".address-container", (0, skynode_1.el)("img", { src: "/images/icn/klaytn.png", alt: "klaytn" }), this.walletAddress = (0, skynode_1.el)(".address")))), (0, skynode_1.el)("main", (0, skynode_1.el)("section", (0, skynode_1.el)("header", (0, skynode_1.el)(".price-container", (0, skynode_1.el)("p", "판매가격"), this.priceDisplay = (0, skynode_1.el)(".price", "..."), (0, skynode_1.el)("p", "Klay")), (0, skynode_1.el)(".my-container", (0, skynode_1.el)(".whitelist-container", (0, skynode_1.el)("p", "나의 화이트리스트"), this.whitelistBalance = (0, skynode_1.el)(".info", "...")), (0, skynode_1.el)(".klay-container", (0, skynode_1.el)("p", "나의 Klay"), this.klayBalance = (0, skynode_1.el)(".info", "0")))), (0, skynode_1.el)("article", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".amount-container", (0, skynode_1.el)("p", "판매된 수량 / 총 판매 수량"), this.mintCount = (0, skynode_1.el)(".info", `... / ${this.TODAY_COUNT}`)), (0, skynode_1.el)(".amount-container", (0, skynode_1.el)("p", "남은수량"), this.remainsCount = (0, skynode_1.el)(".info", "...")), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)(".progress", this.bar = (0, skynode_1.el)(".progress__bar")), (0, skynode_1.el)(".status-container", (0, skynode_1.el)("p", "1차"), (0, skynode_1.el)(".vertical-hr"), (0, skynode_1.el)("p", "2차"), (0, skynode_1.el)(".vertical-hr"), (0, skynode_1.el)("p", "3차"), (0, skynode_1.el)(".vertical-hr"), (0, skynode_1.el)("p", "퍼블릭"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".action-container", (0, skynode_1.el)(".text-container", (0, skynode_1.el)("p", "트랜잭션당"), (0, skynode_1.el)(".info", "1"), (0, skynode_1.el)("p", "개")), (0, skynode_1.el)("button", "MINT", {
            click: async () => {
                await (await this.getMinterContract()).mint(1);
            },
        }))))))));
        Wallet_1.default.on("connect", () => this.loadBalance());
        this.interval = setInterval(() => this.progress(), 1000);
        this.progress();
    }
    async getMinterContract() {
        const addr = (await superagent_1.default.get("https://api.minttenz.com/mintercontract")).text;
        this._minterContract = new MinterContract_1.default(addr);
        return this._minterContract;
    }
    async loadBalance() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText(CommonUtil_1.default.shortenAddress(address));
            const minterContract = await this.getMinterContract();
            const price = await minterContract.calculatedPrice();
            this.priceDisplay.empty().appendText(String(parseInt(ethers_1.utils.formatEther(price), 10)));
            const balance = await Klaytn_1.default.balanceOf(address);
            let balanceDisplay = ethers_1.utils.formatEther(balance);
            balanceDisplay = (+balanceDisplay).toFixed(4);
            this.klayBalance.empty().appendText(balanceDisplay);
            const whitelist = (await superagent_1.default.get(`https://api.minttenz.com/wl/${address}`)).body.wl;
            this.whitelistBalance.empty().appendText(`${whitelist}`);
        }
    }
    async progress() {
        this.loadBalance();
        const remains = this.TODAY_COUNT + 500 - (await TenzContract_1.default.totalSupply()).toNumber();
        this.remainsCount.empty().appendText(String(remains));
        const d = this.TODAY_COUNT - remains > this.TODAY_COUNT ? this.TODAY_COUNT : this.TODAY_COUNT - remains;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.mintCount.empty().appendText(`${d} / ${this.TODAY_COUNT}`);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map