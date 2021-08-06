import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { Voting } from "components/Voting";
import React from "react";
import { useStyles } from "./styles";

export const HomePage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <AppBar className={classes.appBar} position="static">
                <Typography color="textPrimary" className={classes.appBarTitle}>
                    Beans
                </Typography>
            </AppBar>
            <div className={classes.content}>
                <Typography
                    color="textPrimary"
                    variant="h4"
                    className={classes.title}
                >
                    Voting Dapp
                </Typography>
                <Divider />
                <Box mt={3}>
                    <Voting />
                </Box>
            </div>
        </div>
    );
};
