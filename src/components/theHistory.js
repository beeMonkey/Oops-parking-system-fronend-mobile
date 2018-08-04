import React, { Component } from 'react';
import { NavBar, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class TheHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.props.GetFinishOrdersByBoyId();
    }
    render() {
        const items = this.props.ordersList;
        return (
            <div>
                <NavBar
                    mode="dark"
                >历史</NavBar>
                {items.length>0 &&
                <List className="my-list">
                    {items.map(item => {
                        return <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                        >
                            订单{item.id} <Brief>{item.carId}</Brief>
                        </Item>
                    })}
                </List>
                }
                {items.length===0 &&
                <p style={{marginTop:"60%",textAlign:"center",fontSize:"2rem"}}>暂无历史订单</p>
                }
            </div>
        );
    }
}

export default TheHistory;