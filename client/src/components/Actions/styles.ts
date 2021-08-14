import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    actions: {
        display: "flex",
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(8),
    },
    button: {
        width: 200,
    },
}));
