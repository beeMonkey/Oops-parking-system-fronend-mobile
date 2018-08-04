import React, { Component } from 'react';
import { NavBar, List, Result } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const myImg = src => <img src={src} style={{ width: "2rem", height: "2rem" }} alt="" />;
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
                {items.length > 0 &&
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
                {items.length === 0 &&
                    <Result
                        style={{ marginTop: "60%", textAlign: "center", fontSize: "1.5rem"}}
                        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                        title="您的业绩不太好，还要加强喔！"
                    />
                }

            </div>
        );
    }
}

export default TheHistory;