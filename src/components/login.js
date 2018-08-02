import React, { Component } from 'react';
import { NavBar,Button, WhiteSpace} from 'antd-mobile';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                 <NavBar mode="dark">登录页面</NavBar>
                 <Button type="primary" onClick={() => alert("111")}>登录</Button><WhiteSpace />
            </div>
        );
    }
}

export default Login;