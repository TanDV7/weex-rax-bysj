/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 09:42:28
        Filename: UserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
// import styles from '../Styles/index.css';
import { doPost } from '../Utils';

const styles = {};


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
  doSelectUserInfo() {
    const selectUserInfo = `select * from users where user_Id='${this.props.userId}'`;
    doPost(selectUserInfo, (json) => {
      this.setState({
        userName: json.user_name,
        userAge: json.user_Age,
        userPhone: json.user_Phone,
        userPassword: json.user_password
      });
    });
  }
  render() {
    return (
      <View>
        <Text style={styles.appBanner}>用户信息</Text>
        <Text>账号</Text>
        <Text
          value={this.props.userId} />
        <Text>用户名</Text>
        <Text
          value={this.state.userName} />
        <Text>年龄</Text>
        <Text
          value={this.state.userAge} />
        <Text>性别</Text>
        <Text
          value={this.state.userSex} />
        <Text>手机</Text>
        <Text>密码</Text>
      </View>
    );
  }
}

export default UserInfo;
