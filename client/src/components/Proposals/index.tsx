import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { ProposalItem } from "./ProposalItem";
import { Proposal } from "types/Proposal";

export const Proposals: React.FC = () => {
    const classes = useStyles();

    const proposals: Proposal[] = [
        {
            name: "Proposal 1",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            voteCount: 3,
        },
        {
            name: "Proposal 2",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            voteCount: 15,
        },
        {
            name: "Proposal 3",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            voteCount: 11,
        },
    ];

    return (
        <div className={classes.proposals}>
            {proposals.map((proposal) => (
                <ProposalItem proposal={proposal} />
            ))}
        </div>
    );
};
