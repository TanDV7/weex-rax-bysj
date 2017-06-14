/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-30 20:31:45
        Filename: Register.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem } from 'antd-mobile';

import Style from '../Styles';
import { doPost } from '../Utils';

import Model from '../Model';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      rptPassword: ''
    };
  }
  async doRegister(ev) {
    const sql = `insert into users(user_Id,user_password) 
                    values('${this.state.userId}','${this.state.password}')`;
    if (this.state.user === '') {
      Modal.alert('Error', '请输入账号');
    } else if (this.state.password === '') {
      Modal.alert('Error', '请输入密码');
    } else if (this.state.rptPassword !== this.state.password) {
      Modal.alert('Error', '请保证两次密码一致');
    } else {
      try {
        const json = await doPost(sql);
        if (json.errno) {
          Modal.alert('Error', '用户已存在');
        } else {
          Model.setState({ userId: this.state.userId });
          console.log(Model.state, this.state);
          Modal.alert('Info', '注册并登录成功', [{
            text: '确定',
            onPress: () => {
              this.props.history.replace('/main');
            }
          }]);
        }
      } catch (err) {
        // TODO: 错误处理
      }
    }
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='注册' />
            <Card.Body>
              <InputItem
                value={this.state.userId}
                onChange={txt => this.setState({ userId: txt })}
                placeholder='请输入账号' />
              <InputItem
                value={this.state.password}
                onChange={txt => this.setState({ password: txt })}
                type='password'
                placeholder='请输入密码' />
              <InputItem
                value={this.state.rptPassword}
                onChange={txt => this.setState({ rptPassword: txt })}
                type='password'
                placeholder='再次输入密码' />
              <Button
                type='primary'
                onClick={ev => this.doRegister(ev)}>注册并登录</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Register;
