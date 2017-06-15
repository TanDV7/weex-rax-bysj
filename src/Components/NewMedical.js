/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 19:06:04
        Filename: Components/NewMedical.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem, Radio } from 'antd-mobile';
import { observer } from 'mobx-react';
import { Text } from 'react-native';

import Model from '../Model';
import Style from '../Styles';
import { doPost, getNowTime } from '../Utils';

const RadioItem = Radio.RadioItem;

class NewMedical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      med_name: '',
      med_BloodPressureLow: '',
      med_BloodPressureHigh: '',
      med_BloodSugar: '',
      med_BloodRat: '',
      med_Status: ''
    };
  }
  async doNewMedical() {
    try {
      let med_BloodPressure = `${this.state.med_BloodPressureLow}/${this.state.med_BloodPressureHigh}`;
      console.log(`insert into med values('${this.state.med_name}','${Model.state.userId}','${getNowTime()}','${this.state.med_Status}','${med_BloodPressure},${this.state.med_BloodSugar},${this.state.med_BloodRat}'`);
      const json = await doPost(`insert into med values('${this.state.med_name}','${Model.state.userId}','${getNowTime()}','${this.state.med_Status}','${med_BloodPressure}','${this.state.med_BloodSugar}','${this.state.med_BloodRat}')`,true);
      Modal.alert('消息', '建立成功', [
        { text: '确定', onPress: () => this.props.history.replace('/medical') }
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
              <InputItem
                value={this.state.med_name}
                onChange={txt => this.setState({ med_name: txt})}
                placeholder='请输入档案名称'>档案名称</InputItem>
              <Flex>
                <Flex.Item>
                  <InputItem
                    maxLength={4}
                    type='number'
                    placeholder='低压'
                    value={this.state.med_BloodPressureLow}
                    onChange={txt => this.setState({ med_BloodPressureLow: txt })}
                    >血压</InputItem>
                </Flex.Item>
                <Flex.Item>
                  <InputItem
                    maxLength={4}
                    type='number'
                    placeholder='高压'
                    value={this.state.med_BloodPressureHigh}
                    onChange={txt => this.setState({  med_BloodPressureHigh: txt })}></InputItem>
                </Flex.Item>
              </Flex>
              <InputItem
                maxLength={4}
                type='number'
                value={this.state.med_BloodSugar}
                onChange={txt => this.setState({ med_BloodSugar: txt})}
                placeholder='请输入血糖值'>血糖</InputItem>
              <InputItem
                maxLength={4}
                type='number'
                value={this.state.med_BloodRat}
                onChange={txt => this.setState({ med_BloodRat: txt})}
                placeholder='请输入心率值'>心率</InputItem>
              <Flex>
                <Flex.Item>
                  <InputItem maxLength={0} editable={false}>就医情况</InputItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.med_Status === '未就医'} onChange={() => this.setState({ med_Status: '未就医' })}>
                    未就医
                  </RadioItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.med_Status === '已就医'} onChange={() => this.setState({ med_Status: '已就医' })}>
                    已就医
                  </RadioItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.med_Status === '打算就医'} onChange={() => this.setState({ med_Status: '打算就医' })}>
                    打算就医
                  </RadioItem>
                </Flex.Item>
              </Flex>
              <Button
                type='primary' style={Style.blankBorder}
                onClick={ev => this.doNewMedical()}>确定</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default NewMedical;