import { useEffect, useState } from "react";
import Web3 from "web3";

/*
 * Get the current accounts from metamask
 */
export function useAccount(web3: Web3 | null): string {
    const [account, setAccount] = useState("");

    // Get the current account from metamask
    useEffect(() => {
        (async () => {
            if (!web3) return [];
            try {
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            } catch (error) {
                console.error("Failed to load accounts: ", error);
            }
        })();
    }, [web3]);

    // Update the account if changed in metamask
    useEffect(() => {
        if (!window.ethereum) return;

        const handleAccountsChanged = (accounts: string[]) => {
            setAccount(accounts[0]);
        };

        window.ethereum.on("accountsChanged", handleAccountsChanged);

        // Remove the listener
        return () => {
            window.ethereum.removeListener(
                "accountsChanged",
                handleAccountsChanged
            );
        };
    });

    return account;
}
