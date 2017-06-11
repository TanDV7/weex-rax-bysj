/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-31 15:45:41
        Filename: UserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { observer } from 'mobx-react';
import { Modal, Flex, Card, Button, InputItem } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

@observer
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userAge: '',
      userPhone: '',
      userPassword: '',
      userSex: ''
    };
  }
  componentDidMount() {
    this.doSelectUserInfo();
  }
  async doSelectUserInfo() {
    const selectUserInfo = `select * from users where user_Id='${Model.state.userId}'`;
    try {
      const json = await doPost(selectUserInfo);
      this.setState({
        userName: json.user_name,
        userAge: json.user_Age,
        userSex: (json.user_Gender === 'male') ? '男' : '女',
        userPhone: json.user_Phone,
        userPassword: json.user_password
      });
    } catch (err) {
      // TODO: 错误处理
    }
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <Text>用户信息</Text>
              <Text>账号</Text>
              <Text>{Model.state.userId}</Text>
              <Text>用户名</Text>
              <Text>{this.state.userName}</Text>
              <Text>年龄</Text>
              <Text>{this.state.userAge}</Text>
              <Text>性别</Text>
              <Text>{this.state.userSex}</Text>
              <Text>手机</Text>
              <Text>{this.state.userPhone}</Text>
              <Button
                type='primary'
                onClick={ev => this.props.history.push('/edituserinfo')}>编辑</Button>
              <Button
                type='primary'>注销</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default UserInfo;
