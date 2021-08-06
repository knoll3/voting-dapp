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
    accountsTable: {
        width: 400,
        marginRight: "auto",
        marginLeft: "auto",
    },
    tableRow: {
        "& td": {
            borderBottom: "none",
        },
    },
    accountsTableItem: {
        fontFamily: "monospace",
        fontSize: "0.75rem",
    },
    rightToVoteButton: {},
}));
