import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import history from './history';
import Home from "../pages/home/Home"
import Index from "../pages/Blog"
import Mtandao from "../pages/Mtandao"
import Shop from "../pages/Shop"
import Live from "../pages/Live";
import live1 from "../pages/Live/components/Live_Now"







export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Home"  component={Home} />
                    <Route path="/blog"  component={Index} />
                    <Route path="/bank"  component={Mtandao} />
                    <Route path="/Shop"  component={Shop} />
                    <Route path="/Live"  component={Live} />







                </Switch>
            </Router>
        )
    }
}
