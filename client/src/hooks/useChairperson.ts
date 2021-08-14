import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";

export function useChairperson(instance: Contract | null): string {
    const [chairperson, setChairperson] = useState("");

    useEffect(() => {
        (async () => {
            if (!instance) return;
            const chairperson = (await instance.methods
                .chairperson()
                .call()) as string;
            setChairperson(chairperson);
        })();
    }, [instance]);

    return chairperson;
}
