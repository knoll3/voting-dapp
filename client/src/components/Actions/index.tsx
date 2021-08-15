import React from "react";
import { useStyles } from "./styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Role } from "types/Role";
import { Contract } from "web3-eth-contract";
import { VoterDialog } from "./VoterDialog";
import { Voter } from "types/Voter";

interface ActionsProps {
    role: Role;
    instance: Contract | null;
    voter: Voter | null;
    account: string;
}

export const Actions: React.FC<ActionsProps> = ({
    role,
    instance,
    voter,
    account,
}) => {
    const classes = useStyles();
    const [addVoterOpen, setAddVoterOpen] = React.useState(false);
    const [delegateOpen, setDelegateOpen] = React.useState(false);

    const content = [];

    const onClickAddVoter = () => {
        setAddVoterOpen(true);
    };

    const onAddVoter = (address: string) => {
        setAddVoterOpen(false);
        if (instance) {
            instance.methods.giveRightToVote(address).send({ from: account });
        }
    };

    const onAddVoterClose = () => {
        setAddVoterOpen(false);
    };

    const onClickDelegate = () => {
        setDelegateOpen(true);
    };

    const onDelegate = (address: string) => {
        setDelegateOpen(false);
        if (instance) {
            instance.methods.delegate(address).send({ from: account });
        }
    };

    const onDelegateClose = () => {
        setDelegateOpen(false);
    };

    switch (role) {
        case Role.Chairperson:
            content.push(
                <Box key="add-voter" mr={3}>
                    <Button
                        onClick={onClickAddVoter}
                        className={classes.button}
                        variant="contained"
                    >
                        Add Voter
                    </Button>
                </Box>
            );
            content.push(
                <Box key="delegate">
                    <Button
                        onClick={onClickDelegate}
                        className={classes.button}
                        variant="contained"
                        disabled={!!(voter && voter.voted)}
                    >
                        Delegate
                    </Button>
                </Box>
            );

            break;
        case Role.Voter:
            content.push(
                <Box key="delegate">
                    <Button
                        onClick={onClickDelegate}
                        className={classes.button}
                        variant="contained"
                        disabled={!!(voter && voter.voted)}
                    >
                        Delegate
                    </Button>
                </Box>
            );
            break;
        case Role.Viewer:
            content.push(
                <Typography key="viewer" color="textSecondary">
                    You have not been given the right to vote
                </Typography>
            );
            break;
    }

    return (
        <div className={classes.actions}>
            <VoterDialog
                open={addVoterOpen}
                onClose={onAddVoterClose}
                onSubmit={onAddVoter}
                title="Add Voter"
                actionText="Add"
                helperText="Paste the address of the voter to give the right to vote"
            />
            <VoterDialog
                open={delegateOpen}
                onClose={onDelegateClose}
                onSubmit={onDelegate}
                title="Delegate"
                actionText="Delegate"
                helperText={`Paste the address of the voter to delegate your votes. This will delegate ALL your votes to the receiver. Your voting weight is ${
                    voter && voter.weight
                }.`}
            />
            {content}
        </div>
    );
};
