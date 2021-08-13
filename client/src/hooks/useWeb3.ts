import React, { useEffect } from "react";
import Web3 from "web3";

/**
 * Get a web3 instance
 */
export function useWeb3(): Web3 | null {
    const [web3, setWeb3] = React.useState<Web3 | null>(null);

    useEffect(() => {
        (async () => {
            // @ts-ignore
            const ethereum = window.ethereum;
            // @ts-ignore
            const windowWeb3 = window.web3;

            if (ethereum) {
                // Modern dapp browsers...
                const _web3 = new Web3(ethereum);
                try {
                    await ethereum.enable();
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

    return web3;
}

// function getWeb3(): Promise<Web3> {
// return new Promise((resolve, reject) => {
// window.addEventListener("load", async () => {
// // Enter url ganache is running on
// const provider = new Web3.providers.HttpProvider(
// "http://127.0.0.1:7545"
// );
// const _web3 = new Web3(provider);
// console.log("No web3 instance injected, using Local web3.");
// resolve(_web3);
// });
// });
// }

// const getWeb3 = () =>
// new Promise((resolve, reject) => {
// // Wait for loading completion to avoid race conditions with web3 injection timing.
// window.addEventListener("load", async () => {
// // Modern dapp browsers...
// if (window.ethereum) {
// const web3 = new Web3(window.ethereum);
// try {
// // Request account access if needed
// await window.ethereum.enable();
// // Acccounts now exposed
// resolve(web3);
// } catch (error) {
// reject(error);
// }
// }
// // Legacy dapp browsers...
// else if (window.web3) {
// // Use Mist/MetaMask's provider.
// const web3 = window.web3;
// console.log("Injected web3 detected.");
// resolve(web3);
// }
// // Fallback to localhost; use dev console port by default...
// else {
// const provider = new Web3.providers.HttpProvider(
// "http://127.0.0.1:8545"
// );
// const web3 = new Web3(provider);
// console.log("No web3 instance injected, using Local web3.");
// resolve(web3);
// }
// });
// });
