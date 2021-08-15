import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { ProposalItem } from "./ProposalItem";
import { Proposal } from "types/Proposal";
import { Role } from "types/Role";
import { Voter } from "types/Voter";
import { Contract } from "web3-eth-contract";

interface ProposalsProps {
    proposals: Proposal[];
    role: Role;
    voter: Voter | null;
    instance: Contract | null;
    account: string;
    onVote: (proposal: Proposal) => void;
}

export const Proposals: React.FC<ProposalsProps> = ({
    proposals,
    role,
    voter,
    instance,
    account,
    onVote,
}) => {
    const classes = useStyles();

    let roleIndicator;
    switch (role) {
        case Role.Chairperson:
            roleIndicator = <Typography>Your role is chairperson</Typography>;
            break;
        case Role.Voter:
            roleIndicator = <Typography>Your role is voter</Typography>;
            break;
        case Role.Viewer:
            roleIndicator = <Typography>You only have view access</Typography>;
            break;
        default:
            roleIndicator = <></>;
    }

    return (
        <div>
            <Box display="flex" justifyContent="space-between" mb={3}>
                {roleIndicator}
                {voter && role != Role.Viewer ? (
                    <Typography>
                        Your voting weight is {voter.weight}.{" "}
                        {voter.voted && "You have already voted."}
                    </Typography>
                ) : (
                    <></>
                )}
            </Box>
            <div className={classes.proposals}>
                {proposals.map((proposal, i) => (
                    <ProposalItem
                        key={i}
                        proposal={proposal}
                        disabled={
                            role === Role.Viewer || !!(voter && voter.voted)
                        }
                        onVote={onVote}
                    />
                ))}
            </div>
        </div>
    );
};
