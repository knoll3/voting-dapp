import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWeb3 } from "hooks/useWeb3";
import { useStorageValue } from "hooks/useStorageValue";

function App() {
    const web3 = useWeb3();
    const storageValue = useStorageValue(web3, 5);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div>The stored value is: {storageValue}</div>
            </header>
        </div>
    );
}

export default App;
