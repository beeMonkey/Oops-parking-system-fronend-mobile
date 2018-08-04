import React, { Component } from 'react';
import { NavBar, List,Icon } from 'antd-mobile';
import {Modal} from "antd-mobile/lib/index";
const Item = List.Item;
const alert = Modal.alert;
class ChoosePark extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.props.onGetParkinglots();
    }
    render() {
        const { match,  history } = this.props;
        const orderId = match.params.id;
        console.log(orderId)
        const parkinglotlist = this.props.parkinglots.map(lot=>{
            console.log(lot)
            return (
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() =>
                        alert('', '确定选择该停车场？', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', onPress: () => {this.props.onPark(orderId, lot.id)
                                    history.push("/home/parkUnparkTask");
                                } },
                        ])
                    }

                >
                    {lot.name}({lot.countOfCars}/{lot.size})
                </Item> )
        })


        return (
            <div>
                <NavBar  icon={<Icon type="left" />}
                         onLeftClick={() => history.push(`/home/finishPark/${orderId}`)} mode="dark">停车地点</NavBar>
                <List className="my-list">
                    {parkinglotlist}
                </List>
            </div>
        );
    }
}

export default ChoosePark;
