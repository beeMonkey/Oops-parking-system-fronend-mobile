import React, { Component } from 'react';
import { TabBar,NavBar,Icon} from 'antd-mobile';
import { Route,Link,Redirect } from "react-router-dom";
import Router from "../Router";
import Orders from "./orders";
import TabBarBottom from "./TabBarBottom"
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
        };
      }
      render() {
        const {...props}=this.props;
        return (
          <div >
            <Router/>
            <TabBarBottom {...props}></TabBarBottom>
          </div>
        )
    }
}

export default Home