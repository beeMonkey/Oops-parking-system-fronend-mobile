import React, {Component} from 'react';
import {NavBar, List, Icon} from 'antd-mobile';
import {Modal} from "antd-mobile/lib/index";

const Item = List.Item;
const alert = Modal.alert;

class ChoosePark extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentWillMount() {
        this.props.onGetParkinglots();
    }

    park = (orderId, parkingLotId, size,countOfCars) => {
        let remainSize = parseInt(size)-parseInt(countOfCars);
console.log(size)
        console.log(countOfCars)
        if (remainSize != 0) {
            alert('', '确定选择该停车场？', [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '确定', onPress: () => {
                        this.props.onPark(orderId, parkingLotId),
                            alert("停车成功")
                        this.props.history.push("/home/parkUnparkTask");
                    }
                },
            ])
        } else {
            alert("该停车场已满");
        }

    }

    render() {
        const {match, history} = this.props;
        const orderId = match.params.id;
        console.log(orderId)
        const parkinglotlist = this.props.parkinglots.map(lot => {
            console.log(lot)
            return (
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() =>

                        this.park(orderId, lot.id, lot.size,lot.countOfCars)
                    }

                >
                    {lot.name}({lot.countOfCars}/{lot.size})
                </Item>)
        })


        return (
            <div>
                <NavBar icon={<Icon type="left"/>}
                        onLeftClick={() => history.push(`/home/finishPark/${orderId}`)} mode="dark">停车地点</NavBar>
                <List className="my-list">
                    {parkinglotlist}
                </List>

            </div>
        );
    }
}

export default ChoosePark;
