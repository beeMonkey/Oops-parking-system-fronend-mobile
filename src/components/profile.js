import React, { Component } from 'react';
import { NavBar, List, Button, Modal } from 'antd-mobile';

const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: ""
        }
    }
    componentDidMount() {
        this.setState({
            userInfo: JSON.parse(localStorage.getItem("userInfo"))
        })
    }
    logout() {
        alert('确认退出?', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确认', onPress: () => {
                    localStorage.removeItem("access_token")
                    this.props.history.push("/login")
                }
            }, 
        ])
    }

    render() {
        const { history } = this.props;

        const userInfo = this.state.userInfo
        return (
            <div type="flex">
                <NavBar mode="dark">个人</NavBar>
                <Item
                    style={{ marginTop: "1rem" }}
                    extra={userInfo.username}
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    账号:
                </Item>
                <Item
                    extra={userInfo.email}
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    邮箱:
                </Item>
                <Item
                    extra={userInfo.phone}
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    手机:
                </Item>
                <Item
                    extra={userInfo.name}
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    姓名:
                </Item>
                <Item

                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    extra="详情"
                    onClick={() => {
                        history.push("/home/showPark")
                    }}
                >
                    停车场<Brief></Brief>

                </Item>
                <Button style={{ margin: "6rem auto 0 auto", width: "90%" }}
                    type="primary"
                    onClick={() => {
                        this.logout()
                    }}>退出登录</Button>
            </div>
        );
    }
}

export default Profile;