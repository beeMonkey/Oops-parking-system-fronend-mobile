import React, { Component } from 'react';
import { NavBar, List, Modal, Tabs } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
const tabs = [
    { title: "停车列表" },
    { title: "取车列表" }
];

class ParkUnparkTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        this.props.onGetMyOrders();
    }
    unParkCar = (orderId, parkingLotId) => {
        console.log(orderId)
        console.log(parkingLotId)
        this.props.unParkCar(orderId, parkingLotId);
    }

    render() {
        const { history } = this.props;
        console.log(this.props.ordersList)
        const parkList = this.props.ordersList.filter(order =>
            order.type == "存车" && order.status == "停取中" && order.parkinglotId == null
        )
        .map(order=>{
            return (<Item
            id={order.id}
            arrow="horizontal"
            thumb="../../images/parkCar.svg"
            multipleLine
            extra="详情"
            onClick={() => {history.push(`/home/finishPark/${order.id}` ) }}
        >
            {order.carId}<Brief>停车时间</Brief>
        </Item>)
        });

        const unParkList = this.props.ordersList.filter(order =>
            order.type == "取车" && order.status == "停取中"
        )
        .map(order=>{
            return (<Item
            id={order.id}
            arrow="horizontal"
            thumb="../../images/unparkCar.svg"
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
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{  height: '100%', backgroundColor: '#fff' }}>
                        <List className="my-list">
                            {parkList}

                        </List>
                    </div>
                    <div style={{  height: '100%', backgroundColor: '#fff' }}>
                        <List className="my-list">
                            {unParkList}
                        </List>
                    </div>

                </Tabs>


            </div>
        );
    }
}

export default ParkUnparkTask;
