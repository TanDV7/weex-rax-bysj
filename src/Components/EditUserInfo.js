/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-31 20:36:14
        Filename: EditUserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem, Radio } from 'antd-mobile';
import { observer } from 'mobx-react';

import Model from '../Model';
import Style from '../Styles';
import { doPost } from '../Utils';

class EditUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      rptPassword: ''
    };
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
              <Radio
                >asdf</Radio>
              <InputItem
                type='phone'
                placeholder='请输入手机'>手机</InputItem>
              <InputItem
                type='password'
                placeholder='请输入正确的原密码'>原密码</InputItem>
              <InputItem
                type='password'
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