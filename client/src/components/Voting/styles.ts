import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    voting: {},
    select: {
        fontFamily: "monospace",
    },
    dropDown: {
        "& li": {
            fontFamily: "monospace",
            fontSize: "0.9rem",
        },
    },
}));
