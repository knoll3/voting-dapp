import React, { useEffect } from "react";
import Web3 from "web3";

// *** THIS IS GLOBAL ***
// Adds the etherum and web3 properties to window
declare global {
    interface Window {
        ethereum: any;
        web3: any;
    }
}

/**
 * Get a web3 instance
 */
export function useWeb3(): Web3 | null {
    const [web3, setWeb3] = React.useState<Web3 | null>(null);

    useEffect(() => {
        (async () => {
            const ethereum = window.ethereum;
            const windowWeb3 = window.web3;

            if (ethereum) {
                // Modern dapp browsers...
                const _web3 = new Web3(ethereum);
                try {
                    ethereum.request({ method: "eth_requestAccounts" });
                    setWeb3(_web3);
                } catch (error) {
                    console.error(error);
                }
            } else if (windowWeb3) {
                // Use Mist/MetaMask's provider.
                setWeb3(windowWeb3);
            } else {
                // Fallback to localhost; use dev console port by default...
                const provider = new Web3.providers.HttpProvider(
                    "http://127.0.0.1:7545"
                );
                const _web3 = new Web3(provider);
                setWeb3(_web3);
            }
        })();
    }, []);

    // Reload the page if network has been changed
    // https://docs.metamask.io/guide/ethereum-provider.html#events
    useEffect(() => {
        if (!window.ethereum) return;

        const handleChainChanged = () => {
            window.location.reload();
        };

        window.ethereum.on("chainChanged", handleChainChanged);

        // Remove the listener
        return () => {
            window.ethereum.removeListener("chainChanged", handleChainChanged);
        };
    });

    return web3;
}
