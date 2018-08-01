import React, { Component } from 'react';
import { TabBar,NavBar,Icon} from 'antd-mobile';
import Home from './home';
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <NavBar 
                mode="dark"
                // icon={<Icon type="left" />}
                // onLeftClick={() => console.log('onLeftClick')}
                >订单</NavBar>
                <h1>订单1</h1>
            </div>
        );
    }
}

export default Orders;