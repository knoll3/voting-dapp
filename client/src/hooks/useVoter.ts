import { useEffect, useState } from "react";
import { Voter } from "types/Voter";
import { Contract } from "web3-eth-contract";

export function useVoter(
    instance: Contract | null,
    account: string
): Voter | null {
    const [voter, setVoter] = useState<Voter | null>(null);

    useEffect(() => {
        (async () => {
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
        })();
    }, [instance, account]);

    return voter;
}
