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
import { Flex, Card, Button, Modal } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class MedicalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      med_CreateDate: '00000000'
    };
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select * from med where med_name='${this.props.match.params.med_name}'`,true);
      console.log(json);
      this.setState({
        med_name: json[0][0],
        med_CreateDate: json[0][2],
        med_BloodPressure: json[0][4],
        med_BloodSugar: json[0][5],
        med_HeartRate: json[0][6],
        med_Status: json[0][3]
      });
      if (json.error) {
        // TODO
      }
    } catch (e) {
      // TODO
    }
  }
  async doDeleteMed() {
    try {
      const json = await doPost(`delete from med where med_name='${this.props.match.params.med_name}'`);
      console.log(json);
      Modal.alert('消息', '删除成功', [
        { text: '确定', onPress: () => this.props.history.replace('/medical') }
      ])
    } catch (e) {

    }
  }
  render() {
    const sp = this.state.med_CreateDate.split('');
    const date = `${sp[0]}${sp[1]}${sp[2]}${sp[3]}年${sp[4]}${sp[5]}月${sp[6]}${sp[7]}日`;
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text style={Style.belowBorder}>档案详情</Text>
              <Text style={Style.blankBorder}>档案名称</Text>
              <Text style={Style.belowBorder}>{this.state.med_name}</Text>
              <Text style={Style.blankBorder}>创建日期</Text>
              <Text style={Style.belowBorder}>{date}</Text>
              <Text style={Style.blankBorder}>血压</Text>
              <Text style={Style.belowBorder}>{this.state.med_BloodPressure}</Text>
              <Text style={Style.blankBorder}>血糖</Text>
              <Text style={Style.belowBorder}>{this.state.med_BloodSugar}</Text>
              <Text style={Style.blankBorder}>心率</Text>
              <Text style={Style.belowBorder}>{this.state.med_HeartRate}</Text>
              <Text style={Style.blankBorder}>医疗情况</Text>
              <Text style={Style.belowBorder}>{this.state.med_Status}</Text>
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doDeleteMed()}>删除档案</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default MedicalInfo;
