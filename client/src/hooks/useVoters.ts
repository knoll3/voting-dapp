import { useEffect, useState } from "react";
import { Voter } from "types/Voter";
import { Contract } from "web3-eth-contract";

export function useVoters(
    instance: Contract | null,
    accounts: string[]
): Voter[] {
    const [voters, setVoters] = useState<Voter[]>([]);

    useEffect(() => {
        (async () => {
            if (!instance) return [];
            const voters = [];
            for (let a of accounts) {
                const data = await instance.methods.voters(a).call();
                const voter: Voter = {
                    address: a,
                    delegate: data[0],
                    weight: data[1],
                    voted: data[2],
                    vote: data[3],
                };
                voters.push(voter);
            }
            setVoters(voters);
        })();
    }, [instance, accounts]);

    return voters;
}
