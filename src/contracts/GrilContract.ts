import { BigNumber } from "ethers";
import TenzArtifact from "./abi/artifacts/contracts/Tenz.sol/Tenz.json";
import KIP17Contract from "./standard/KIP17Contract";

class GrilContract extends KIP17Contract {

    constructor() {
        super("0x3f635476023A6422478cF288ECAEb3fDCf025e9F", TenzArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GrilContract();
