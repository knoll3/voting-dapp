import { makeStyles } from "@material-ui/core";

const SPACING = 4;

export const useStyles = makeStyles((theme) => ({
    proposals: {
        display: "flex",
        marginLeft: -theme.spacing(SPACING),
        marginRight: -theme.spacing(SPACING),
        flexWrap: "wrap",
    },
    proposalItem: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 200,
        height: 250,

        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),

        marginLeft: theme.spacing(SPACING),
        marginRight: theme.spacing(SPACING),
        marginBottom: theme.spacing(SPACING),
    },
    description: {
        flex: 1,
        overflowY: "hidden",
    },
}));
