import React, { Component } from 'react';
import Orders from "./components/orders";
import ParkUnparkTask from "./components/parkUnparkTask";
import TheHistory from "./components/theHistory"
import Profile from "./components/profile"
import {Route } from "react-router-dom";
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {/* <Route exact path="/login" component={LoginForm} /> */}
                {/* <Route  path="/home" component={HomePage} /> */}
                <Route exact path="/home/orders" component={Orders} />
                <Route  path="/home/parkUnparkTask" component={ParkUnparkTask} />
                <Route  path="/home/history" component={TheHistory} />
                <Route  path="/home/profile" component={Profile} />
            </div>
        );
    }
}

export default Router;