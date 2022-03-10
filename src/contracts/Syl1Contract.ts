import { BigNumber } from "ethers";
import TenzArtifact from "./abi/artifacts/contracts/Tenz.sol/Tenz.json";
import KIP17Contract from "./standard/KIP17Contract";

class Syl1Contract extends KIP17Contract {

    constructor() {
        super("0x6B8f71aa8D5817d94056103886a1F07d12e78CE5", TenzArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new Syl1Contract();
