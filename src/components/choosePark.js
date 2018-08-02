import React, { Component } from 'react';
import { NavBar, List,Icon } from 'antd-mobile';
const Item = List.Item;
class ChoosePark extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        
    }
    render() {
        const { history } = this.props;
        
        return (
            <div>
                <NavBar  icon={<Icon type="left" />}
                 onLeftClick={() => history.push("/home/finishPark")} mode="dark">停车地点</NavBar>
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        onClick={() => { }}
                    >
                        停车场A(10)
                    </Item>
                </List>
            </div>
        );
    }
}

export default ChoosePark;