import { useEffect, useState } from "react";
import { Voter } from "types/Voter";
import { Contract } from "web3-eth-contract";

export function useVoters(instance: Contract | null): Voter[] {
    const [voters, setVoters] = useState<Voter[]>([]);

    useEffect(() => {
        (async () => {
            if (!instance) return;
            try {
                const voters = await instance.methods.voters("0x000").call();
            } catch (error) {
                console.error(error);
            }
        })();
    }, [instance]);

    return voters;
}
