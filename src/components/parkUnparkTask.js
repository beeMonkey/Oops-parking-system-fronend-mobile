import React, { Component } from 'react';
import { NavBar, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class ParkUnparkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { history } = this.props;
        return (
            <div>
                <NavBar mode="dark">停取列表</NavBar>
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        extra="详情"
                        onClick={() => {history.push("/home/finishPark" ) }}
                    >
                        停车 <Brief>车牌号，停车时间</Brief>
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        extra="详情"
                        onClick={() => { }}
                    >
                        取车 <Brief>车牌号，停车时间</Brief>
                    </Item>
                </List>
            </div>
        );
    }
}

export default ParkUnparkTask;