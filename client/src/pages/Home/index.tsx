import React from "react";
import { useStyles } from "./styles";
import { AppBar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { Status } from "components/Status";
import { Proposals } from "components/Proposals";

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
                <div className={classes.header}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        mr={6}
                    >
                        <Box mb={3}>
                            <Typography variant="h4">Voting Dapp</Typography>
                        </Box>
                        <Typography align="left" variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>
                    </Box>
                    <Status />
                </div>
                <Divider />
                <div className={classes.proposalsContainer}>
                    <Box mt={1} mb={3}>
                        <Typography variant="h6">Proposals</Typography>
                    </Box>
                    <Proposals />
                </div>
            </div>
        </div>
    );
};
