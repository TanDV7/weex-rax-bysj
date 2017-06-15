/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 14:49:11
        Filename: Components/MyService.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  Text, Image
} from 'react-native';
import { observer } from 'mobx-react';
import { Button, Flex, Card, InputItem, Modal } from 'antd-mobile';

import Model from '../Model';
import { doPost, getNowTime } from '../Utils';
import Style from '../Styles';

class MyService extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from service where service_id='${this.props.match.params.name}'`,true);
      this.setState({
        service_id: json[0][0],
        pic: json[0][2],
        title: json[0][1],
        service_Phone: json[0][3],
        service_Type: json[0][4],
        service_Price: json[0][5],
        service_yuyue: '',
        service_Return: ''
      });
    } catch (e) {

    }
  }
  async doCancelService() {
    try {
      const json = await doPost(`update user_service set service_condition='已取消' where user_Id='${Model.state.userId}' and service_id='${this.state.service_id}'`,true);
      Modal.alert('消息', '已取消预约' ,[
        { text: '确定', onPress: () => this.props.history.replace('/service') }
        ]);
    } catch (e) {

    }
  }
  async doServiceReturn () {
    try {
      const json = await doPost(`update user_service set service_return='${this.state.service_Return}',service_condition='已评价' where user_Id='${Model.state.userId}' and service_id='${this.state.service_id}'`,true);
      Modal.alert('消息', '评价成功', [
        { text: '确定', onPress: () => this.props.history.replace('/service') }
      ]);
    } catch (e) {

    }
  }
  render() {
    const price = `${this.state.service_Price}元`;
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text style={Style.blankBorder}>服务详情</Text>
              <Text style={Style.blankBorder}>服务人员姓名</Text>
              <Text style={Style.belowBorder}>{this.state.title}</Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={{ uri: `http://123.206.211.92/${this.state.pic}` }} />
              <Text style={Style.blankBorder}>服务人员联系方式</Text>
              <Text style={Style.belowBorder}>{this.state.service_Phone}</Text>
              <Text style={Style.blankBorder}>服务类型</Text>
              <Text style={Style.belowBorder}>{this.state.service_Type}</Text>
              <Text style={Style.blankBorder}>服务价格</Text>
              <Text style={Style.belowBorder}>{price}</Text>
              <InputItem
                maxLength={100}
                value={this.state.service_Return}
                onChange={txt => this.setState({ service_Return: txt })}
                placeholder='请输入评价'>评价</InputItem>
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doCancelService()}>取消预约</Button>
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doServiceReturn()}>完成并评价服务</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default MyService;
