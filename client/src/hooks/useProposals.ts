import { useCallback, useEffect, useState } from "react";
import { Proposal } from "types/Proposal";
import { Contract } from "web3-eth-contract";
import { toUtf8 } from "web3-utils";

export function useProposals(
    instance: Contract | null,
    proposalsLength: number
): [Proposal[], () => Promise<void>] {
    const [proposals, setProposals] = useState<Proposal[]>([]);

    // updateProposals is returned from this hook and may be used elsewhere.
    // For example: updateProposals should be called when a voter's vote is confirmed
    const updateProposals = useCallback(async () => {
        if (!instance) return;

        const _proposals: any[] = [];

        for (let i = 0; i < proposalsLength; i++) {
            try {
                const data = await instance.methods.proposals(i).call();
                const proposal: Proposal = {
                    name: toUtf8(data.name),
                    index: i,
                    description:
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    voteCount: data.voteCount,
                };
                _proposals.push(proposal);
            } catch (error) {
                console.error(error);
            }
        }
        setProposals(_proposals);
    }, [instance, proposalsLength]);

    useEffect(() => {
        updateProposals();
    }, [updateProposals]);

    return [proposals, updateProposals];
}
