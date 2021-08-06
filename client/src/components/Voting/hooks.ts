import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";

// The change event for a material UI select element
type SelectChangeEvent = React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
}>;

/**
 * Get the selected account
 * @param accounts All accounts from the provider
 * @returns An array whose first element is the selected account and whose second
 * element is the onChangeAccount event callback
 */
export function useSelectedAccount(
    accounts: string[]
): [string | null, (event: SelectChangeEvent) => void] {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

    const onChangeAccount = (event: SelectChangeEvent) => {
        setSelectedAccount(event.target.value as string);
    };

    // Update the selected account to the first value when accounts load for
    // the first time
    useEffect(() => {
        // If selected account has already been set, don't do anything
        if (selectedAccount) return;

        // if selected account has not been set, set to first account
        setSelectedAccount(accounts[0]);
    }, [accounts, selectedAccount]);

    return [selectedAccount, onChangeAccount];
}

export function useChairperson(instance: Contract | null): string {
    const [chairperson, setChairperson] = useState("");

    useEffect(() => {
        (async () => {
            if (!instance) return "";
            try {
                const _chairperson = await instance.methods
                    .chairperson()
                    .call();
                setChairperson(_chairperson);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [instance]);

    return chairperson;
}
