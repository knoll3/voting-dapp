import React, { useCallback } from "react";
import { useStyles } from "./styles";
import { useWeb3 } from "hooks/useWeb3";
import { useAccounts } from "hooks/useAccounts";
import {
    Box,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { useChairperson, useSelectedAccount } from "./hooks";
import { useBallotInstance } from "hooks/useBallotInstance";

export const Voting: React.FC = () => {
    const classes = useStyles();

    const web3 = useWeb3();
    const accounts = useAccounts(web3);
    const instance = useBallotInstance(web3);
    const chairperson = useChairperson(instance);

    const [selectedAccount, onChangeAccount] = useSelectedAccount(accounts);

    const parseAccount = useCallback(
        (account: string): string => {
            let name = `${account.substring(0, 6)}...${account.substring(
                account.length - 4
            )}`;

            // If the selected account is the chairperson, show that in the select menu
            if (account === chairperson) name = "Chairperson";

            return name;
        },
        [accounts, chairperson]
    );

    return (
        <div className={classes.voting}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <InputLabel id="select-account-label">
                    <Box mb={1}>
                        <Typography>Current Account</Typography>
                    </Box>
                </InputLabel>
                <Select
                    value={selectedAccount}
                    onChange={onChangeAccount}
                    labelId="select-account-label"
                    className={classes.select}
                    MenuProps={{ classes: { paper: classes.dropDown } }}
                >
                    {accounts.map((account) => (
                        <MenuItem value={account} key={`key-${account}`}>
                            {parseAccount(account)}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        </div>
    );
};
