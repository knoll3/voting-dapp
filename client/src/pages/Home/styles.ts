import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    home: {},
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
    },
    title: {
        marginBottom: theme.spacing(3),
    },
}));
