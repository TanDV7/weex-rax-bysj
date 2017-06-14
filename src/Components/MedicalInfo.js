/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 16:04:23
        Filename: Components/MedicalInfo.js
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

class MedicalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text>档案详情</Text>
              <Text>档案名称</Text>
              <Text>{this.state.title}</Text>
              <Text>创建日期</Text>
              <Text>{this.state.service_Phone}</Text>
              <Text>血压</Text>
              <Text>{this.state.service_Type}</Text>
              <Text>血糖</Text>
              <Text>{this.state.service_Price}</Text>
              <Text>心率</Text>
              <Text />
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default MedicalInfo;
