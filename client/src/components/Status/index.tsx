import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { Voter } from "types/Voter";

interface StatusProps {
    isChairperson: boolean;
    voter: Voter | null;
}

export const Status: React.FC<StatusProps> = ({ isChairperson, voter }) => {
    const classes = useStyles();

    const messages: string[] = [];

    if (isChairperson) {
        messages.push("You are the chairperson");
    }

    if (voter) {
        messages.push(`Your voting weight is ${voter.weight}`);
    }

    return (
        <Box className={classes.statusContainer}>
            <div className={classes.statusHeader}>
                <Typography variant="subtitle1">
                    <b>Status</b>
                </Typography>
            </div>
            <div className={classes.statuses}>
                {messages.map((message, i) => (
                    <div key={i}>
                        <Typography variant="body2">{message}</Typography>
                    </div>
                ))}
            </div>
        </Box>
    );
};
