import React, { Component } from 'react';
import { TabBar,NavBar,Icon} from 'antd-mobile';
class ParkUnparkTask extends Component {
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
                >停取列表</NavBar>
            </div>
        );
    }
}

export default ParkUnparkTask;