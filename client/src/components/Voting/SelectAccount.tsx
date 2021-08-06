import React, { useCallback } from "react";
import { useStyles } from "./styles";
import {
    Box,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { SelectChangeEvent } from "./hooks";

interface SelectAccountProps {
    selectedAccount: string | null;
    accounts: string[];
    chairperson: string | null;
    onChangeAccount: (event: SelectChangeEvent) => void;
}

/**
 * Selects the account to be used
 * @param selectedAccount The currently selected account
 * @param accounts All the accounts on the network
 * @param chairperson The chairperson on the contract
 * @param onChangeAccount The event that is triggered when the account is changed
 */
export const SelectAccount: React.FC<SelectAccountProps> = ({
    selectedAccount,
    accounts,
    chairperson,
    onChangeAccount,
}) => {
    const classes = useStyles();

    // Format the account into something human readable
    const formatAccount = useCallback(
        (account: string): string => {
            let name = `${account.substring(0, 6)}...${account.substring(
                account.length - 4
            )}`;

            if (account === chairperson) name = "Chairperson";

            return name;
        },
        [accounts, chairperson]
    );

    return (
        <React.Fragment>
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
                        {formatAccount(account)}
                    </MenuItem>
                ))}
            </Select>
        </React.Fragment>
    );
};
