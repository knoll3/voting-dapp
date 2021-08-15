import { useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import BallotAbi from "contracts/Ballot.json";

/**
 * Get the ballot contract instance
 */
export function useBallotInstance(web3: Web3 | null): Contract | null {
    const [instance, setInstance] = useState<Contract | null>(null);

    // Using any here because there is no type for the abi
    const BallotContract = BallotAbi as any;

    // Get the instance when web3 changes
    useEffect(() => {
        (async () => {
            if (!web3) return instance;
            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = BallotContract.networks[networkId];
                const _instance = new web3.eth.Contract(
                    BallotContract.abi,
                    deployedNetwork && deployedNetwork.address
                );
                setInstance(_instance);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [web3, BallotContract.abi, BallotContract.networks, instance]);

    return instance;
}
