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
import { SelectAccount } from "./SelectAccount";
import { ChairpersonSection } from "./ChairpersonSection";

export const Voting: React.FC = () => {
    const classes = useStyles();

    const web3 = useWeb3();
    const accounts = useAccounts(web3);
    const instance = useBallotInstance(web3);
    const chairperson = useChairperson(instance);

    const [selectedAccount, onChangeAccount] = useSelectedAccount(accounts);

    return (
        <div className={classes.voting}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <SelectAccount
                    selectedAccount={selectedAccount}
                    accounts={accounts}
                    chairperson={chairperson}
                    onChangeAccount={onChangeAccount}
                />
            </Box>
            {selectedAccount === chairperson && (
                <Box mt={3}>
                    <ChairpersonSection
                        accounts={accounts}
                        chairperson={chairperson}
                    />
                </Box>
            )}
        </div>
    );
};
