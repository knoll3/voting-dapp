import React, { useEffect } from "react";
import Web3 from "web3";

/**
 * Get a web3 instance
 */
export function useWeb3() {
    const [web3, setWeb3] = React.useState<Web3>();

    useEffect(() => {
        (async () => {
            setWeb3(await getWeb3());
        })();
    }, []);

    return web3;
}

function getWeb3(): Promise<Web3> {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            // @ts-ignore
            const ethereum = window.ethereum;
            //@ts-ignore
            const web3 = window.web3;
            if (ethereum) {
                const web3 = new Web3(ethereum);
                try {
                    // Request account access if needed
                    await ethereum.enable();
                    // Accounts now exposed
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            }
            // Legacy dapp browsers...
            else if (web3) {
                // Use Mist/MetaMask's provider.
                console.log("Injected web3 detected.");
                resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
                const provider = new Web3.providers.HttpProvider(
                    "http://127.0.0.1:8545"
                );
                const _web3 = new Web3(provider);
                console.log("No web3 instance injected, using Local web3.");
                resolve(_web3);
            }
        });
    });
}
