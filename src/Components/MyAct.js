/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 14:49:19
        Filename: Components/MyAct.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  TouchableHighlight, ScrollView, Image, Text, ListView
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card, Button, InputItem, Modal } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class MyAct extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from act where act_id=${this.props.match.params.name}`);
      console.log(`select * from act where act_id=${this.props.match.params.name}`);
      if (json.error) {
        // TODO
      }
      this.setState({
        act_id: json[0][0],
        act_Name: json[0][1],
        act_Address: json[0][2],
        act_Time: json[0][3],
        act_number: json[0][4],
        act_Status: json[0][5],
        act_Return: ''
      });
    } catch (e) {
      // TODO
    }
  }
  async doActReturn () {
    try {
      const json = await doPost(`update user_act set act_return='${this.state.act_Return}',act_status='已评价' where user_Id='${Model.state.userId}' and act_id='${this.state.act_id}'`,true);
      Modal.alert('消息', '评价成功', [
        { text: '确定', onPress: () => this.props.history.replace('/act') }
        ]);
    } catch (e) {

    }
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text style={Style.blankBorder}>活动详情</Text>
              <Text style={Style.blankBorder}>活动名称</Text>
              <Text style={Style.belowBorder}>{this.state.act_Name}</Text>
              <Text style={Style.blankBorder}>活动地点</Text>
              <Text style={Style.belowBorder}>{this.state.act_Address}</Text>
              <Text style={Style.blankBorder}>活动时间</Text>
              <Text style={Style.belowBorder}>{this.state.act_Time}</Text>
              <Text style={Style.blankBorder}>活动人数</Text>
              <Text style={Style.belowBorder}>{this.state.act_number}</Text>
              <Text style={Style.blankBorder}>活动状态</Text>
              <Text style={Style.belowBorder}>{this.state.act_Status}</Text>
              <InputItem
                maxLength={100}
                value={this.state.act_Return}
                onChange={txt => this.setState({ act_Return: txt })}
                placeholder='请输入评价'>评价</InputItem>
              <Button
                style={Style.blankBorder}
                type='primary'
                onClick={ev => this.doActReturn()}>评价活动</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default MyAct;