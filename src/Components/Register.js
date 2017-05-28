/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-29 00:27:55
        Filename: Components/Register.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  Button, View, Text, TextInput, ToastAndroid
} from 'react-native';

import { doPost } from '../Utils';

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
      ToastAndroid.show('请输入账号', ToastAndroid.SHORT);
    } else if (this.state.password === '') {
      ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
    } else if (this.state.rptPassword !== this.state.password) {
      ToastAndroid.show('请保证两次密码一致', ToastAndroid.SHORT);
    } else {
      try {
        const json = await doPost(sql);
        if (json.errno) {
          ToastAndroid.show('用户已存在', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('注册并登录成功', ToastAndroid.SHORT);
          this.props.history.push('/main');
        }
      } catch (err) {
        // TODO: 错误处理
      }
    }
  }
  render() {
    return (
      <View >
        <Text >注册</Text>
        <View >
          <TextInput
            value={this.state.userId}
            onChangeText={txt => this.setState({ userId: txt })}
            placeholder='请输入账号' />
          <TextInput
            secureTextEntry
            value={this.state.password}
            onChangeText={txt => this.setState({ passwod: txt })}
            password='true'
            placeholder='请输入密码' />
          <TextInput
            secureTextEntry
            value={this.state.rptPassword}
            onChangeText={txt => this.setState({ rptPassword: txt })}
            password='true'
            placeholder='再次输入密码' />
          <Button
            title='注册并登录'
            onPress={ev => this.doRegister(ev)} />
        </View>
      </View>
    );
  }
}

export default Register;
