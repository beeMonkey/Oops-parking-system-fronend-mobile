import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
class TabBarBottom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'ordersTab',
    };
  }
  componentWillMount() {
    let path=this.props.location.pathname;
    console.log(path)
    if(path.indexOf("/home/orders")){
      this.setState({
        selectedTab: 'ordersTab',
      });
    }
    if(path==="/home/parkUnparkTask"){
      this.setState({
        selectedTab: 'parkUnparkTaskTab',
      });
    }
    if(path==="/home/history"){
      this.setState({
        selectedTab: 'historyTab',
      });
    }
    if(path==="/home/profile"){
      this.setState({
        selectedTab: 'profileTab',
      });
    }
  }
 
  renderContent(pageText) {
    const { history } = this.props;
    //const history=this.props.history;
    //history.push("/home/orders")
    history.push("/home/" + pageText)
  }
  render() {
    return (
      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        {/* <div style={{ position: 'fixed', height: '100%', width: '100%', top:0 } }>  */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="抢单"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'ordersTab'}
            // badge={1}
            onPress={() => {
              this.renderContent('orders')
              this.setState({
                selectedTab: 'ordersTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="停取"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'parkUnparkTaskTab'}
            onPress={() => {
              this.renderContent('parkUnparkTask')
              this.setState({
                selectedTab: 'parkUnparkTaskTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="历史"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'historyTab'}
            onPress={() => {
              this.renderContent('history')
              this.setState({
                selectedTab: 'historyTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="个人"
            key="my"
            selected={this.state.selectedTab === 'profileTab'}
            onPress={() => {
              this.renderContent('profile')
              this.setState({
                selectedTab: 'profileTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
        {/* </div> */}
      </div >
    )
  }
}
export default TabBarBottom