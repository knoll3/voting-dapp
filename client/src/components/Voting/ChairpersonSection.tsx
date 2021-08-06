import {
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { useStyles } from "./styles";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

interface ChairpersonSectionProps {
    accounts: string[];
    chairperson: string;
}

export const ChairpersonSection: React.FC<ChairpersonSectionProps> = ({
    accounts,
    chairperson,
}) => {
    const classes = useStyles();

    // Remove the chairperson from the list
    accounts = accounts.filter((x) => x !== chairperson);

    return (
        <Paper variant="outlined">
            <Box m={1}>
                <Typography variant="h6">Chairperson Section</Typography>
            </Box>
            <Divider />
            <Box mt={3}>
                <Table className={classes.accountsTable}>
                    <TableBody>
                        {accounts.map((account) => (
                            <TableRow
                                key={`key-${account}`}
                                className={classes.tableRow}
                            >
                                <TableCell>
                                    <Typography
                                        className={classes.accountsTableItem}
                                    >
                                        {account}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        size="small"
                                        className={classes.rightToVoteButton}
                                    >
                                        <LibraryAddCheckIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Paper>
    );
};
