import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { Proposals } from "components/Proposals";
import { useWeb3 } from "hooks/useWeb3";
import { useAccount } from "hooks/useAccount";
import { useBallotInstance } from "hooks/useBallotInstance";
import { useChairperson } from "hooks/useChairperson";
import { useVoter } from "hooks/useVoter";
import { useProposals } from "hooks/useProposals";
import { Actions } from "components/Actions";
import { Role } from "types/Role";
import { Proposal } from "types/Proposal";

export const HomePage: React.FC = () => {
    const classes = useStyles();

    const web3 = useWeb3();
    const instance = useBallotInstance(web3);
    const chairperson = useChairperson(instance);
    const account = useAccount(web3);
    const [voter, updateVoter] = useVoter(instance, account);
    const [proposals, updateProposals] = useProposals(instance, 3);

    const onVote = (proposal: Proposal) => {
        if (instance) {
            instance.methods
                .vote(proposal.index)
                .send({ from: account })
                .on("receipt", () => {
                    updateVoter();
                    updateProposals();
                });
        }
    };

    const onDelegate = (address: string) => {
        if (instance) {
            instance.methods
                .delegate(address)
                .send({ from: account })
                .on("receipt", () => {
                    updateVoter();
                });
        }
    };

    const onAddVoter = (address: string) => {
        if (instance) {
            instance.methods
                .giveRightToVote(address)
                .send({ from: account })
                .on("receipt", () => {
                    updateVoter();
                });
        }
    };

    let isChairperson = false;
    if (account && account !== "" && chairperson && chairperson !== "") {
        isChairperson = account.toLowerCase() === chairperson.toLowerCase();
    }

    let role = Role.Viewer;
    if (isChairperson) {
        role = Role.Chairperson;
    } else if (voter && voter.weight >= 1) {
        role = Role.Voter;
    }

    return (
        <div className={classes.home}>
            <div className={classes.content}>
                <div className={classes.header}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mr={6}
                    >
                        <Box mb={6}>
                            <Typography variant="h4">Voting Dapp</Typography>
                        </Box>
                        <Typography align="left" variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>
                        <Actions
                            role={role}
                            voter={voter}
                            onDelegate={onDelegate}
                            onAddVoter={onAddVoter}
                        />
                    </Box>
                </div>
                <Divider />
                <div className={classes.proposalsContainer}>
                    <Box mt={1} mb={3}>
                        <Typography variant="h6">Proposals</Typography>
                    </Box>
                    <Proposals
                        proposals={proposals}
                        role={role}
                        voter={voter}
                        instance={instance}
                        account={account}
                        onVote={onVote}
                    />
                </div>
            </div>
            <div className={classes.bottomMargin} />
        </div>
    );
};
