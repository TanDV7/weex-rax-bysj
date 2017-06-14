/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 14:49:11
        Filename: Components/MyService.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  ScrollView, Image, Text, ListView, TouchableHighlight, View
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card, Button } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class MyService extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text>服务详情</Text>
              <Text>服务人员姓名</Text>
              <Text>{this.state.title}</Text>
              <image
                style={{width: 40, height: 40}}
                source={{ uri: `http://123.206.211.92/${rowData[2]}` }}></image>
              <Text>服务人员联系方式</Text>
              <Text>{this.state.service_Phone}</Text>
              <Text>服务类型</Text>
              <Text>{this.state.service_Type}</Text>
              <Text>服务价格</Text>
              <Text>{this.state.service_Price}</Text>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    )
  }
}

export default MyService;