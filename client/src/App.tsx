import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWeb3 } from "hooks/useWeb3";
import { useStorageValue } from "hooks/useStorageValue";
import { Box, Button } from "@material-ui/core";
import { HomePage } from "pages/Home";

function App() {
    // const web3 = useWeb3();
    // const storageValue = useStorageValue(web3, 5);

    const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert("Clicked a Material-UI button");
    };

    return (
        <div className="App">
            <HomePage />
        </div>
    );
}

export default App;
