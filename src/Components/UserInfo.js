/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-29 00:24:53
        Filename: UserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';

import Model from '../Model';
import { doPost } from '../Utils';

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
        userPhone: json.user_Phone,
        userPassword: json.user_password
      });
    } catch (err) {
      // TODO: 错误处理
    }
  }
  render() {
    return (
      <View>
        <Text>用户信息</Text>
        <Text>账号</Text>
        <Text>{this.props.userId}</Text>
        <Text>用户名</Text>
        <Text>{this.state.userName}</Text>
        <Text>年龄</Text>
        <Text>{this.state.userAge}</Text>
        <Text>性别</Text>
        <Text>{this.state.userSex}</Text>
        <Text>手机</Text>
        <Text>密码</Text>
      </View>
    );
  }
}

export default UserInfo;
