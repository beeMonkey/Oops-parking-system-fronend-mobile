import React, { Component } from 'react';
import { TabBar,NavBar,Icon} from 'antd-mobile';
class TheHistory extends Component {
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
                >历史</NavBar>
            </div>
        );
    }
}

export default TheHistory;