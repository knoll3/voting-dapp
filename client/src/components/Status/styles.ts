import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    statusContainer: {
        border: `1px solid ${theme.palette.divider}`,
    },
    statusHeader: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    statuses: {
        whiteSpace: "nowrap",
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
    },
}));
