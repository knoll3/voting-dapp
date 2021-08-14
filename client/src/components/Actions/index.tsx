import React from "react";
import { useStyles } from "./styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Role } from "types/Role";

interface ActionsProps {
    role: Role;
}

export const Actions: React.FC<ActionsProps> = ({ role }) => {
    const classes = useStyles();

    const content = [];

    const onAddVoter = () => {
        //
    };

    const onDelegate = () => {
        //
    };

    switch (role) {
        case Role.Chairperson:
            content.push(
                <Box mr={3}>
                    <Button
                        onClick={onAddVoter}
                        className={classes.button}
                        variant="contained"
                    >
                        Add Voter
                    </Button>
                </Box>
            );
            content.push(
                <Box>
                    <Button
                        onClick={onDelegate}
                        className={classes.button}
                        variant="contained"
                    >
                        Delegate
                    </Button>
                </Box>
            );

            break;
        case Role.Voter:
            content.push(
                <Box>
                    <Button
                        onClick={onDelegate}
                        className={classes.button}
                        variant="contained"
                    >
                        Delegate
                    </Button>
                </Box>
            );
            break;
        case Role.Viewer:
            content.push(
                <Typography color="textSecondary">
                    You have not been given the right to vote
                </Typography>
            );
            break;
    }

    return <div className={classes.actions}>{content}</div>;
};
