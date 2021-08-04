import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWeb3 } from "hooks/useWeb3";
import { useStorageValue } from "hooks/useStorageValue";
import { Box, Button } from "@material-ui/core";

function App() {
    const web3 = useWeb3();
    const storageValue = useStorageValue(web3, 5);

    const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Clicked a Material-UI button");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div>The stored value is: {storageValue}</div>
                <Box mt={3}>
                    <Button
                        onClick={onClickButton}
                        variant="contained"
                        color="primary"
                    >
                        MUI Button
                    </Button>
                </Box>
            </header>
        </div>
    );
}

export default App;
