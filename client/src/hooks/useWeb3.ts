import React, { useEffect } from "react";
import Web3 from "web3";

// *** THIS IS GLOBAL ***
// Adds the etherum and web3 properties to window
declare global {
    interface Window {
        ethereum: any;
    }
}

/**
 * Get a web3 instance
 */
export function useWeb3(): Web3 | null {
    const [web3, setWeb3] = React.useState<Web3 | null>(null);

    useEffect(() => {
        (async () => {
            if (!window.ethereum) return;

            const _web3 = new Web3(window.ethereum);
            try {
                window.ethereum.request({ method: "eth_requestAccounts" });
                setWeb3(_web3);
            } catch (error) {
                console.error(error);
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
