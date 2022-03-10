"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Tenz_json_1 = __importDefault(require("./abi/artifacts/contracts/Tenz.sol/Tenz.json"));
const KIP17Contract_1 = __importDefault(require("./standard/KIP17Contract"));
class TenzContract extends KIP17Contract_1.default {
    constructor() {
        super("0x1105f804919CD03ea2327BFFC9b775A962072501", Tenz_json_1.default.abi);
    }
    async totalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
}
exports.default = new TenzContract();
//# sourceMappingURL=TenzContract.js.map