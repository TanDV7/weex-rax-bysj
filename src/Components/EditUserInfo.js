/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-13 10:14:00
        Filename: EditUserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem, Radio } from 'antd-mobile';
import { observer } from 'mobx-react';
import { Text } from 'react-native';

import Model from '../Model';
import Style from '../Styles';
import { doPost } from '../Utils';

const RadioItem = Radio.RadioItem;

class EditUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      oldPassword: '',
      newPassword: '',
      userSex: '男'
    };
  }
  async doUpdateUserInfo(ev) {
    try{
      const json = await doPost(`select user_password from users where user_Id=${Model.state.userId}`);
      if(json.user_password == this.state.password) {
       if(this.state.newPassword === null) {

       }
      } else {
        Modal.alert('Error', '请输入正确的原密码');
      }
  } catch (err) {
    Modal.alert('Error', err.toString());
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
                value={this.state.userName}
                placeholder='请输入姓名'>用户名</InputItem>
              <InputItem
                type='number'
                placeholder='请输入年龄'>年龄</InputItem>
              <Flex>
                <Flex.Item>
                  <InputItem maxLength={0} editable={false}>年龄</InputItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.userSex === '男'} onChange={() => this.setState({ userSex: '男' })}>
                    男
                  </RadioItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.userSex === '女'} onChange={() => this.setState({ userSex: '女' })}>
                    女
                  </RadioItem>
                </Flex.Item>
              </Flex>
              <InputItem
                type='phone'
                placeholder='请输入手机'>手机</InputItem>
              <InputItem
                type='password'
                value={this.state.oldPassword}
                placeholder='请输入正确的原密码'>原密码</InputItem>
              <InputItem
                type='password'
                value={this.state.newPassword}
                placeholder='请输入新密码(可以为空)'>新密码</InputItem>
              <Button
                type='primary'>确认</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default EditUserInfo;
