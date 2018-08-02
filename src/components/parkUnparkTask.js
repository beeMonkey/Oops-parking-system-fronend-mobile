import React, { Component } from 'react';
import { NavBar, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class ParkUnparkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount(){
        this.props.onGetMyOrders();
    }
    
    render() {
        const { history } = this.props;
        console.log(this.props.ordersList)
        const parkList = this.props.ordersList.filter(order=>
            order.type == "存车"
        )
        .map(order=>{
            return (<Item
            id={order.id}
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            extra="详情"
            onClick={() => {history.push(`/home/finishPark/${order.id}` ) }}
        >
            停车 <Brief>{order.carId}，停车时间</Brief>
        </Item>)
        });

        const unParkList = this.props.ordersList.filter(order=>
            order.type == "取车"
        )
        .map(order=>{
            return (<Item
            id={order.id}
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            extra="详情"
            //onClick={}
        >
            取车 <Brief>{order.carId}，停车时间</Brief>
        </Item>)
        });
        return (
            <div>
                <NavBar mode="dark">停取列表</NavBar>
                <List className="my-list">
                    {parkList}
                    {unParkList}
                </List>
            </div>
        );
    }
}

export default ParkUnparkTask;