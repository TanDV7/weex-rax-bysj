/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 20:53:28
        Filename: ServiceInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  Text, Image, DatePickerAndroid
} from 'react-native';
import { observer } from 'mobx-react';
import { Button, Flex, Card, InputItem, Modal } from 'antd-mobile';

import Model from '../Model';
import { setDig, doPost, getNowTime } from '../Utils';
import Style from '../Styles';

@observer class ServiceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from service where service_id='${this.props.match.params.name}'`);
      this.setState({
        service_id: json[0][0],
        pic: json[0][2],
        title: json[0][1],
        service_Phone: json[0][3],
        service_Type: json[0][4],
        service_Price: json[0][5],
        service_yuyue: ''
      });
    } catch (e) {

    }
  }
  async doOrderService() {
    try {
      const json = await doPost(`insert into user_service values('${Model.state.userId}','${this.state.service_id}','${this.state.service_Type}','${this.state.service_Price}','已预约','${getNowTime()}','${this.state.service_yuyue}','')`,true);
      Modal.alert('消息', '预约成功', [
        { text: '确定', onPress: () => this.props.history.replace('/service') }
      ]);
    } catch (e) {

    }
  }
  async chooseDate() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          service_yuyue: `${year}${setDig(month)}${setDig(day)}`
        })
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
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
              <Text style={Style.belowBorder}>{price}</Text>
              <InputItem
                type='number'
                editable={false}
                value={this.state.service_yuyue}
                onChange={txt => this.setState({ service_yuyue: txt})}
                placeholder='请选择预约日期'><Button onClick={() => this.chooseDate()}>日期</Button></InputItem>
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
