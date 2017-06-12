/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-28 10:16:39
        Filename: Service.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  View, Text, ListView
} from 'react-native';
import { observer } from 'mobx-react';
import { Modal, Flex, Card, Button, InputItem } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class Service extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text>服务列表</Text>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Service;
