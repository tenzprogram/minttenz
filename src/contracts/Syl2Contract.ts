import { BigNumber } from "ethers";
import TenzArtifact from "./abi/artifacts/contracts/Tenz.sol/Tenz.json";
import KIP17Contract from "./standard/KIP17Contract";

class Syl2Contract extends KIP17Contract {

    constructor() {
        super("0xDf104Df1b238dCd1BE2d160CEa47893E03B3F9B9", TenzArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new Syl2Contract();
