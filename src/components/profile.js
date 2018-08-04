import React, {Component} from 'react';
import {NavBar, List, Button, Modal} from 'antd-mobile';

const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logout() {
        alert('确认退出?', '', [
            {text: '取消', onPress: () => console.log('cancel')},
            {
                text: '确认', onPress: () => {
                    localStorage.removeItem("access_token")
                    this.props.history.push("/login")
                }
            },
        ])
    }

    render() {
        return (
            <div type="flex">
                <NavBar mode="dark">个人</NavBar>
                <Item

                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    用户名:<Brief></Brief>
                </Item>
                <Item

                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    邮箱:<Brief></Brief>
                </Item>
                <Item

                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    手机:<Brief></Brief>
                </Item>
                <Item

                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    extra="详情"
                    onClick={() => {
                    }}
                >
                    停车场<Brief></Brief>

                </Item>
                <Button style={{position: 'fixed', bottom: 55, width: "100%"}}
                        type="primary"
                        onClick={() => {
                            this.logout()
                        }}>退出登录</Button>
            </div>
        );
    }
}

export default Profile;