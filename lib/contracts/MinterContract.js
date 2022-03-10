"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const TenzMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/TenzMinter.sol/TenzMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class MinterContract extends Contract_1.default {
    constructor(addr) {
        super(addr, TenzMinter_json_1.default.abi);
    }
    async wlprice() {
        return bignumber_1.BigNumber.from(await this.runMethod("wlprice"));
    }
    async price() {
        return bignumber_1.BigNumber.from(await this.runMethod("price"));
    }
    async whitelist3(user) {
        return bignumber_1.BigNumber.from(await this.runMethod("whitelist3", user));
    }
    async calculatedPrice() {
        const step = (await this.step()).toNumber();
        if (step < 4) {
            return await this.wlprice();
        }
        else {
            return await this.price();
        }
    }
    async step() {
        return bignumber_1.BigNumber.from(await this.runMethod("step"));
    }
    async amount() {
        return bignumber_1.BigNumber.from(await this.runMethod("amount"));
    }
    async mint(count) {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            alert("현재 민팅 진행중이 아닙니다. 민팅은 3월 10일 밤 9시부터 시작됩니다.");
        }
        else {
            const amount = (await this.amount()).toNumber();
            if (amount === 0) {
                alert("현재 민팅 진행중이 아닙니다.");
            }
            else if (count > amount) {
                alert(`남은 개수는 ${amount}개입니다.`);
            }
            else {
                const price = (await this.calculatedPrice()).mul(count);
                const address = await Wallet_1.default.loadAddress();
                if (address !== undefined) {
                    const balance = await Klaytn_1.default.balanceOf(address);
                    if (balance === undefined || balance.lt(price)) {
                        alert("Klay가 부족합니다.");
                    }
                    else {
                        await this.runWalletMethodWithValue(price, "mint", count);
                        alert("축하합니다! 민팅에 성공하셨습니다!");
                    }
                }
            }
        }
    }
}
exports.default = MinterContract;
//# sourceMappingURL=MinterContract.js.map