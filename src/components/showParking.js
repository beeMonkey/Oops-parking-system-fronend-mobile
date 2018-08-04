import React, {Component} from 'react';
import {NavBar, List, Icon} from 'antd-mobile';

const Item = List.Item;

class ShowParking extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentWillMount() {
        this.props.onGetParkinglots();
    }

    render() {
        const {history} = this.props
        const parkinglotlist = this.props.parkinglots.map(lot => {
            return (
                <Item
                    // arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                >
                    {lot.name}({lot.countOfCars}/{lot.size})
                </Item>)
        })
        return (
            <div>
                <NavBar icon={<Icon type="left"/>}
                         mode="dark" onLeftClick={() => history.goBack()}>您的停车场</NavBar>
                <List className="my-list">
                    {parkinglotlist}
                </List>

            </div>
        );
    }
}

export default ShowParking;
