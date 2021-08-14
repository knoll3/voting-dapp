import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    tableHeader: {
        "& th": {
            fontWeight: "bold",
        },
    },
    tableContainer: {
        height: 650,
        overflowY: "auto",
    },
}));
