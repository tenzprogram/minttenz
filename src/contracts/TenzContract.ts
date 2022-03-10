import { BigNumber } from "ethers";
import TenzArtifact from "./abi/artifacts/contracts/Tenz.sol/Tenz.json";
import KIP17Contract from "./standard/KIP17Contract";

class TenzContract extends KIP17Contract {

    constructor() {
        super("0x1105f804919CD03ea2327BFFC9b775A962072501", TenzArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new TenzContract();
