import React from "react";
import { useStyles } from "./styles";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Paper,
    Typography,
} from "@material-ui/core";
import { Proposal } from "types/Proposal";

interface ProposalProps {
    proposal: Proposal;
    disabled?: boolean;
}

export const ProposalItem: React.FC<ProposalProps> = ({
    proposal,
    disabled,
}) => {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.proposalItem}>
            <Box mb={1}>
                <Typography variant="subtitle1">
                    <b>{proposal.name}</b>
                </Typography>
            </Box>
            <Box className={classes.description}>
                <Typography variant="body2">
                    {proposal.description || ""}
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="body2">
                    <b>{proposal.voteCount} votes</b>
                </Typography>
                <Button disabled={disabled} variant="contained" size="small">
                    Vote Now
                </Button>
            </Box>
        </Paper>
    );
};
