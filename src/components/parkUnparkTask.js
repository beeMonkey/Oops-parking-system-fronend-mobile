import React, { Component } from 'react';
import { NavBar, List,Modal } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class ParkUnparkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount(){
        this.props.onGetMyOrders();
    }
    unParkCar = (orderId,parkingLotId) => {
console.log(orderId)
        console.log(parkingLotId)
        this.props.unParkCar(orderId,parkingLotId);
    }
    
    render() {
        const { history } = this.props;
        console.log(this.props.ordersList)
        const parkList = this.props.ordersList.filter(order=>
            order.type == "存车" && order.status=="停取中"
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
            order.type == "取车"&& order.status=="停取中"
        )
        .map(order=>{
            return (<Item
            id={order.id}
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            extra="详情"
            onClick={() =>
                alert('Delete', '确定取车', [
                    { text: 'Cancel', onPress: () => console.log('cancel') },
                    { text: 'Ok', onPress: () => this.unParkCar(order.id,order.parkinglotId) },
                ])
            }
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