/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 20:53:28
        Filename: ServiceInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  Text, Image
} from 'react-native';
import { observer } from 'mobx-react';
import { Button, Flex, Card } from 'antd-mobile';

// import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

@observer class ServiceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from service where service_id='${this.props.match.params.name}'`);
      this.setState(json);
    } catch (e) {
      // TODO
    }
  }
  async doOrderService() {
    try {
      const json = await doPost(`updaet user_service`);
      // TODO
    } catch (e) {
      // TODO
    }
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text style={Style.blankBorder}>服务详情</Text>
              <Image
                style={{ width: 40, height: 40, marginLeft: 20 }}
                source={{ uri: `http://123.206.211.92/${this.state.pic}` }} />
              <Text style={Style.blankBorder}>服务人员姓名</Text>
              <Text style={Style.belowBorder}>{this.state.title}</Text>
              <Text style={Style.blankBorder}>服务人员联系方式</Text>
              <Text style={Style.belowBorder}>{this.state.service_Phone}</Text>
              <Text style={Style.blankBorder}>服务类型</Text>
              <Text style={Style.belowBorder}>{this.state.service_Type}</Text>
              <Text style={Style.blankBorder}>服务价格</Text>
              <Text style={Style.belowBorder}>{this.state.service_Price}</Text>
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doOrderService()}>预约</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default ServiceInfo;
