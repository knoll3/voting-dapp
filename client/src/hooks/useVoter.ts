import { useCallback, useEffect, useState } from "react";
import { Voter } from "types/Voter";
import { Contract } from "web3-eth-contract";

export function useVoter(
    instance: Contract | null,
    account: string
): [Voter | null, () => Promise<void>] {
    const [voter, setVoter] = useState<Voter | null>(null);

    // updateVoter is returned from this hook and may be used elsewhere.
    // For example: updateVoter should be called when a voter's vote is confirmed
    const updateVoter = useCallback(async () => {
        if (!instance) return;
        if (account === "") return;
        const data = await instance.methods.voters(account).call();
        const voter: Voter = {
            address: account,
            delegate: data.delegate,
            weight: data.weight,
            voted: data.voted,
            vote: data.vote,
        };
        setVoter(voter);
    }, [instance, account]);

    useEffect(() => {
        updateVoter();
    }, [updateVoter]);

    return [voter, updateVoter];
}
