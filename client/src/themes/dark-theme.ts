import { createTheme } from "@material-ui/core";

export const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#61dafb",
        },
        background: {
            paper: "#4c5463",
            default: "#282c34",
        },
        text: {
            primary: "#dddddd",
            secondary: "#bbbbbb",
        },
    },
});
