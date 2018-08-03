import React, { Component } from 'react';
import { NavBar,Button,Modal } from 'antd-mobile';
const alert = Modal.alert;
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    logout(){
        alert('确认退出?', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () =>{
                localStorage.removeItem("access_token")
                this.props.history.push("/login")}  
            },
          ])
    }
    render() {
        return (
            <div type="flex" >
                <NavBar mode="dark">个人</NavBar>
                <Button style={{position: 'fixed', bottom: 55,width:"100%"  }} 
                        type="primary" 
                        onClick={() => { this.logout() }}>退出登录</Button>
            </div>
        );
    }
}

export default Profile;