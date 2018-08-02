import React, { Component } from 'react';
import Router from "../Router";
import TabBarBottom from "./TabBarBottom"
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  render() {
    const { ...props } = this.props;
    return (
      <div >
        <Router />
        <TabBarBottom {...props}></TabBarBottom>
      </div>
    )
  }
}

export default Home