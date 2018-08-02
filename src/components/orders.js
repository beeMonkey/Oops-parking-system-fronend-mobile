import React, { Component } from 'react';
import { NavBar, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.props.onGetAllOrders();
    }
    jump() {
        const { history } = this.props;
        history.push("/home/parkUnparkTask")
    }
    render() {
        const items = this.props.ordersList;
        console.log(items)
        return (
            <div>
                <NavBar
                    mode="dark"
                // icon={<Icon type="left" />}
                // onLeftClick={() => console.log('onLeftClick')}
                >订单</NavBar>
                <List className="my-list">
                    {items.map(item=>{
                        return <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        extra="抢单"
                        onClick={() => { alert("抢单成功"); this.jump() }}
                    >
                        订单{item.id} <Brief>{item.carId}，停车时间</Brief>
                    </Item>})}
                </List>
            </div>
        );
    }
}

export default Orders;