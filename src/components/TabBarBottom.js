import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
class TabBarBottom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  renderContent(pageText, tab) {
    const { history } = this.props;
    //const history=this.props.history;
    //history.push("/home/orders")
    history.push("/home/" + pageText)
  }
  render() {
    const { ...props } = this.props;
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
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            {...props}
            onPress={() => {
              this.renderContent('orders', 'blueTab')
              this.setState({
                selectedTab: 'blueTab',
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
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.renderContent('parkUnparkTask', 'redTab')
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Koubei')} */}
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
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.renderContent('history')
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* {this.renderContent('Friend')} */}
          </TabBar.Item>
          <TabBar.Item
            // icon={<Icon type="user"/>}
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="个人"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.renderContent('profile')
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* {this.renderContent('My')} */}
          </TabBar.Item>
        </TabBar>
        {/* </div> */}
      </div >
    )
  }
}
export default TabBarBottom