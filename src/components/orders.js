import React, { Component } from 'react';
import { NavBar, List, Result } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const myImg = src => <img src={src} style={{width:"2rem",height:"2rem"}} alt="" />;
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
        this.props.onPatchOrder(id);
    }
    render() {
        const items = this.props.ordersList;
        return (
            <div>
                <NavBar
                    mode="dark"
                >订单</NavBar>
                {items.length > 0 &&
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

                {items.length === 0 &&
                    <Result
                        style={{ marginTop: "60%", textAlign: "center", fontSize: "2rem" }}
                        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                        title="暂无可抢订单"
                    />}
            </div>
        );
    }
}

export default Orders;