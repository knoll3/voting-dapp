import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";

export const Status: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.statusContainer}>
            <div className={classes.statusHeader}>
                <Typography variant="subtitle1">
                    <b>Status</b>
                </Typography>
            </div>
            <div className={classes.statuses}>
                <div>
                    <Typography variant="body2">
                        Your voting weight is 10
                    </Typography>
                </div>
                <div>
                    <Typography variant="body2">
                        Your voting weight is 10
                    </Typography>
                </div>
            </div>
        </Box>
    );
};
