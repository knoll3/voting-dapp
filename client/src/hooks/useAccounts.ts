import { useEffect, useState } from "react";
import SimpleStorageAbi from "contracts/SimpleStorage.json";
import Web3 from "web3";

/*
 * Get all accounts
 */
export function useAccounts(web3: Web3 | null): string[] {
    const [accounts, setAccounts] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            if (!web3) return [];
            try {
                setAccounts(await web3.eth.getAccounts());
            } catch (error) {
                console.error("Failed to load accounts: ", error);
            }
        })();
    }, [web3]);

    return accounts;
}
