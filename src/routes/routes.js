import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import history from './history';
import Home from "../pages/home/Home"
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Home"  component={Home} />




                </Switch>
            </Router>
        )
    }
}
