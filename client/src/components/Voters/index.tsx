import React from "react";
import { useStyles } from "./styles";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";

export const Voters: React.FC = () => {
    const classes = useStyles();

    const tempData = [
        {
            address: "0x1234...3838",
            delegate: "0xa7a7...8383",
            weight: 1,
            voted: false,
            vote: 3,
        },
        {
            address: "0x1234...3839",
            delegate: "0xa7a7...8383",
            weight: 1,
            voted: false,
            vote: 3,
        },
        {
            address: "0x1234...3840",
            delegate: "0xa7a7...8383",
            weight: 1,
            voted: false,
            vote: 3,
        },
    ];

    return (
        <div>
            <Box display="flex" mb={3}>
                <Box mr={3}>
                    <Button size="small" variant="contained">
                        Add Voter
                    </Button>
                </Box>
                <Box>
                    <Button size="small" variant="contained">
                        Delegate
                    </Button>
                </Box>
            </Box>
            <Paper variant="outlined" className={classes.tableContainer}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow className={classes.tableHeader}>
                            <TableCell>Address</TableCell>
                            <TableCell>Delegate</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Voted</TableCell>
                            <TableCell>Vote</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((t, i) => (
                            <TableRow key={`key-${t.address}`}>
                                <TableCell>{t.address}</TableCell>
                                <TableCell>{t.delegate}</TableCell>
                                <TableCell>{t.weight}</TableCell>
                                <TableCell>{t.voted.toString()}</TableCell>
                                <TableCell>{t.vote}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};
