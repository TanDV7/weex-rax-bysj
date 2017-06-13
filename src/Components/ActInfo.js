/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-13 15:45:46
        Filename: ActInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  TouchableHighlight, ScrollView, Image, Text, ListView
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card, Button, Modal } from 'antd-mobile';

import Model from '../Model';
import { doPost, getNowTime } from '../Utils';
import Style from '../Styles';

class ActInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from act where act_id=${this.props.match.params.name}`);
      if (json.error) {
        // TODO
      }
      this.setState(json);
    } catch (e) {
      // TODO
    }
  }
  async doJoinAct() {
    const json = await doPost(`insert into user_act values('${Model.state.userId}','${this.props.match.params.name}','已参加','${getNowTime()}',NULL)`);
    Modal.alert('Info', '已参加', [
      { text: '确定', onPress: () => this.props.history.replace('/act') }
    ]);
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text>活动详情</Text>
              <Text>活动名称</Text>
              <Text>{this.state.act_Name}</Text>
              <Text>活动地点</Text>
              <Text>{this.state.act_Address}</Text>
              <Text>活动时间</Text>
              <Text>{this.state.act_Time}</Text>
              <Text>活动人数</Text>
              <Text>{this.state.act_number}</Text>
              <Text>活动状态</Text>
              <Text>{this.state.act_Status}</Text>
              <Button
                onClick={ev => this.doJoinAct()}>参加</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default ActInfo;
