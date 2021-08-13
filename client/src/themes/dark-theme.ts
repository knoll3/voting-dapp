import { createTheme } from "@material-ui/core";

export const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#61dafb",
        },
        background: {
            paper: "#2f343d",
            default: "#2f343d",
        },
        text: {
            primary: "#dddddd",
            secondary: "#bbbbbb",
        },
    },
    typography: {
        allVariants: {
            color: "#bbbbbb",
        },
    },
});
