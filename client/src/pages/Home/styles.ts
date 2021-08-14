import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    home: {
        height: "100%",
        overflowY: "auto",
    },
    appBar: {
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    appBarTitle: {
        margin: theme.spacing(1),
        fontWeight: "bold",
    },
    content: {
        marginTop: theme.spacing(9),
        width: 900,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(3),
    },
    proposalsContainer: {
        textAlign: "left",
    },
    votersContainer: {
        textAlign: "left",
    },
    bottomMargin: {
        height: 300,
    },
}));
