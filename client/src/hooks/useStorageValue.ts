import { useEffect, useState } from "react";
import SimpleStorageAbi from "contracts/SimpleStorage.json";
import Web3 from "web3";

export function useStorageValue(web3: Web3 | undefined, setTo: number): number {
    const [storageValue, setStorageValue] = useState<number>(0);

    // TODO: Find a type for ABI
    const SimpleStorageContract = SimpleStorageAbi as any;

    useEffect(() => {
        (async () => {
            if (!web3) return 0;
            try {
                if (!web3) return 0;
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork =
                    SimpleStorageContract.networks[networkId];
                const instance = new web3.eth.Contract(
                    SimpleStorageContract.abi,
                    deployedNetwork && deployedNetwork.address
                );
                await instance.methods.set(setTo).send({ from: accounts[0] });
                const response = await instance.methods.get().call();
                setStorageValue(response);
            } catch (error) {
                alert(
                    `Failed to load accounts or contract. Check console for details.`
                );
                console.error(error);
            }
        })();
    }, [web3]);

    return storageValue;
}
