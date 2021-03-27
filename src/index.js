import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Shopper } from "./Shopper";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Top = () => {
    return <a href="top"></a>;
};
ReactDOM.render(
    <React.StrictMode>
        <Shopper>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Top />
                        <App />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </Shopper>
    </React.StrictMode>,
    document.getElementById("root")
);
