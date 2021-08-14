import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { ProposalItem } from "./ProposalItem";
import { Proposal } from "types/Proposal";

interface ProposalsProps {
    proposals: Proposal[];
}

export const Proposals: React.FC<ProposalsProps> = ({ proposals }) => {
    const classes = useStyles();

    return (
        <div className={classes.proposals}>
            {proposals.map((proposal, i) => (
                <ProposalItem key={i} proposal={proposal} />
            ))}
        </div>
    );
};
