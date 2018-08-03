import React, { Component } from 'react';
import { List, InputItem, NavBar, Button, Toast } from 'antd-mobile';
import axios from "axios"
import "../css/LoginForm.css"
import requestUrls from "../API/requestUrls"
import { createForm } from 'rc-form';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    login=()=>{
        console.log(this.accountInst.props.value)
        const username =  this.accountInst.props.value
        const password =  this.passwordInst.props.value

        axios.post(requestUrls.login,{username,password})
        .then((res) => {
            console.log(res)
            if(res.status===200){
                Toast.info('登录成功');
                localStorage.setItem("access_token", res.data.token);
                localStorage.setItem("id", res.data.id);
                const {history}=this.props;
                history.push("/home/orders")
            } else {
                Toast.info('未知异常！');
            }
        })
        .catch((error) => {
            Toast.info('账号或密码错误！');
        })
    }
 
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="nav">

                <NavBar mode="dark">登录</NavBar>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p style={{ marginTop:"20%",color:"#108ee9",fontSize:"1.5rem" }}>欢迎登陆Oops停车系统</p>

                    <div style={{ marginTop: "10%", padding: "5%", backgroundColor: "#f8f8f8" }}>
                        <InputItem  style={{ backgroundColor: "" }}
                            {...getFieldProps('account')}
                            clear
                            placeholder="请输入账号"
                            ref={el => this.accountInst = el}
                        >账号：</InputItem>
                    </div>
                    <div style={{ marginTop: "2%", padding: "5%", backgroundColor: "#f8f8f8" }}>

                        <InputItem style={{ backgroundColor: "" }}
                            {...getFieldProps('password')}
                            type="password"
                            clear
                            placeholder="请输入密码"
                            ref={el => this.passwordInst = el}
                        >密码：</InputItem>
                    </div>

                    <Button style={{ marginTop: "10%", width: "80%" }} type="primary" onClick={() => this.login()}>登录</Button>
                </div>
            </div>
        );
    }
}
const Login = createForm()(LoginForm);
export default Login;