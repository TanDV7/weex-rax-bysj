/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 21:33:46
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
      this.setState({
        act_Name: json[0][1],
        act_Address: json[0][2],
        act_Time: json[0][3],
        act_number: json[0][4],
        act_Status: json[0][5]
      });
    } catch (e) {
      // TODO
    }
  }
  async doJoinAct() {
    await doPost(`insert into user_act values('${Model.state.userId}','${this.props.match.params.name}','已参加','${getNowTime()}',NULL)`);
    if (~~this.state.act_add === this.state.act_number - 1) {
      await doPost(`update act set act_add='${this.state.act_number}', act_Status='报名已结束' where act_id='${this.props.match.params.name}'`);
    } else {
      await doPost(`update act set act_add=act_add+1  where act_id='${this.props.match.params.name}'`);
    }
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
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doJoinAct()}>参加</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default ActInfo;
