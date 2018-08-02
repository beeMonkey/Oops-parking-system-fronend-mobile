import React, { Component } from 'react';
import { NavBar, List, Icon } from 'antd-mobile';
const Item = List.Item;
class FinishPark extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const {match, history} = this.props
        return (
            <div>
                <NavBar mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => history.push(`/home/parkUnparkTask`)}
                >停车地点</NavBar>
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => {history.push(`/home/choosePark/${match.params.id}`) }}
                    >
                        选择停车场
                    </Item>
                </List>
            </div>
        );
    }
}

export default FinishPark;