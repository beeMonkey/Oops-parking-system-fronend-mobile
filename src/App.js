import React, { Component } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Login from './components/login';
import Home from './components/home';
import { Route,Redirect } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){
}

  render(){
    return (
      <div >
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        {
          !localStorage.getItem("access_token") && window.location.href.indexOf("/login")===-1&& < Redirect to="/login" />
        }
        {/* {

          localStorage.getItem("access_token") && < Redirect to="/home/orders" />
        } */}
      </div>
    )
  }
}

export default App;
