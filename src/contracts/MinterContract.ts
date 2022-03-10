import { BigNumber } from "@ethersproject/bignumber";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import TenzMinterArtifact from "./abi/artifacts/contracts/TenzMinter.sol/TenzMinter.json";
import Contract from "./Contract";
import GrilContract from "./GrilContract";
import MKContract from "./MKContract";
import Syl1Contract from "./Syl1Contract";
import Syl2Contract from "./Syl2Contract";

export default class MinterContract extends Contract {

    constructor(addr: string) {
        super(addr, TenzMinterArtifact.abi);
    }

    public async wlprice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("wlprice"));
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }

    public async whitelist3(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("whitelist3", user));
    }

    public async calculatedPrice(): Promise<BigNumber> {
        const step = (await this.step()).toNumber();
        if (step < 4) {
            return await this.wlprice();
        } else {
            return await this.price();
        }
    }

    public async step(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("step"));
    }

    public async amount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("amount"));
    }

    public async mint(count: number): Promise<void> {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            alert("현재 민팅 진행중이 아닙니다. 민팅은 3월 10일 밤 9시부터 시작됩니다.");
        } else {
            const amount = (await this.amount()).toNumber();
            if (amount === 0) {
                alert("현재 민팅 진행중이 아닙니다.");
            } else if (count > amount) {
                alert(`남은 개수는 ${amount}개입니다.`);
            } else {
                const price = (await this.calculatedPrice()).mul(count);
                const address = await Wallet.loadAddress();
                if (address !== undefined) {

                    if (
                        step === 1 &&
                        (await MKContract.balanceOf(address)).eq(0) &&
                        (await Syl1Contract.balanceOf(address)).eq(0) &&
                        (await Syl2Contract.balanceOf(address)).eq(0)
                    ) {
                        alert("메타콩즈, 실타래 홀더가 아닙니다.");
                    } else if (
                        step === 2 &&
                        (await GrilContract.balanceOf(address)).eq(0)
                    ) {
                        alert("Grilla 홀더가 아닙니다.");
                    } else if (
                        step === 3 &&
                        (await this.whitelist3(address)).eq(0)
                    ) {
                        alert("화리권이 없습니다.");
                    }

                    else {
                        const balance = await Klaytn.balanceOf(address);
                        if (balance === undefined || balance.lt(price)) {
                            alert("Klay가 부족합니다.");
                        } else {
                            await this.runWalletMethodWithValue(price, "mint", count);
                            alert("축하합니다! 민팅에 성공하셨습니다!");
                        }
                    }
                }
            }
        }
    }
}
