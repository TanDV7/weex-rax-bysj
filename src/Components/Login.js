/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-28 23:28:02
        Filename: src/Components/Login.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem } from 'antd-mobile';
import { observer } from 'mobx-react';

import Model from '../Model';
import Style from '../Styles';
import { doPost } from '../Utils';

@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: ''
    };
  }
  async doLogin(ev) {
    if (this.state.userId === '') {
      Modal.alert('Error', '账号不能为空');
    } else if (this.state.password === '') {
      Modal.alert('Error', '密码不能为空');
    } else {
      try {
        const json = await doPost(`select user_password from users where user_Id=${this.state.userId}`);
        if (json.user_password === this.state.password) {
          Model.setState({ userId: this.state.userId });
          Modal.alert('Info', '登录成功', [
            { text: '确定', onPress: () => this.props.history.replace('/main') }
          ]);
        } else if (json.errno) {
          Modal.alert('Error', '密码错误');
        }
      } catch (err) {
        Modal.alert('Error', err.toString());
      }
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
                value={this.state.userId}
                onChange={txt => this.setState({ userId: txt })}
                placeholder='请输入账号'>账号</InputItem>
              <InputItem
                type='password'
                value={this.state.password}
                onChange={txt => this.setState({ password: txt })}
                placeholder='请输入密码'>密码</InputItem>
              <Flex>
                <Flex.Item style={Style.blankBorder}>
                  <Button
                    type='primary'
                    onClick={ev => this.doLogin(ev)}>登陆</Button>
                </Flex.Item>
                <Flex.Item style={Style.blankBorder}>
                  <Button
                    type='primary'
                    onClick={ev => this.props.history.push('/register')}>注册</Button>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Login;
