import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import history from './history';
import Home from "../pages/home/Home"
import Index from "../pages/Blog"
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Home"  component={Home} />
                    <Route path="/blog"  component={Index} />





                </Switch>
            </Router>
        )
    }
}
