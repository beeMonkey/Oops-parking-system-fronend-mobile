import React, { Component } from 'react';
import { NavBar, List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.props.onGetAllOrders();
    }
    jump(id) {
        //const { history } = this.props;
        this.props.onPatchOrder(id);
        // this.props.onGetAllOrders();
        //history.push("/home/parkUnparkTask")
    }
    render() {
        const items = this.props.ordersList;
        return (
            <div>
                <NavBar
                    mode="dark"
                >订单</NavBar>
                {items.length>0 &&
                    <List className="my-list">
                        {items.map(item => {
                            return <Item
                                arrow="horizontal"
                                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                                multipleLine
                                extra="抢单"
                                onClick={() => { this.jump(item.id) }}
                            >
                                订单{item.id} <Brief>{item.carId}，停车时间</Brief>
                            </Item>
                        })}
                    </List>
                }
                {items.length===0 &&
                    <p style={{marginTop:"60%",textAlign:"center",fontSize:"2rem"}}>暂无可抢订单</p>
                }
            </div>
        );
    }
}

export default Orders;