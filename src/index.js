import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Shopper } from "./Shopper";
const Top = () => {
    return <a href="top"></a>;
};
ReactDOM.render(
    <React.StrictMode>
        <Shopper>
            <Top />
            <App />
        </Shopper>
    </React.StrictMode>,
    document.getElementById("root")
);
