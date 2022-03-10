import { BigNumber } from "ethers";
import TenzArtifact from "./abi/artifacts/contracts/Tenz.sol/Tenz.json";
import KIP17Contract from "./standard/KIP17Contract";

class GrilContract extends KIP17Contract {

    constructor() {
        super("0xd3592019ff29ba3f8aa7d73518c1f8e3c8ca0b48", TenzArtifact.abi);
    }

    public async totalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }
}

export default new GrilContract();
