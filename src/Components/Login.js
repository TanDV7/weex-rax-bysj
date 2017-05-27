/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 18:24:44
        Filename: Login.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  View, Button, Text, TextInput, ToastAndroid
} from 'react-native';
import { doPost } from '../Utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: ''
    };
  }
  doLogin(ev) {
    if (this.state.userId === '') {
      ToastAndroid.show('账号不能为空', ToastAndroid.SHORT);
    } else if (this.state.password === '') {
      ToastAndroid.show('密码不能为空', ToastAndroid.SHORT);
    } else {
      doPost(`select user_password from users where user_Id=${this.state.userId}`, (json) => {
        if (json.user_password === this.state.password) {
          this.props.setUserId(this.state.userId);
          ToastAndroid.show('登录成功', ToastAndroid.LONG);
          this.props.history.replace('/main');
        } else if (json.errno) {
          ToastAndroid.show('密码错误', ToastAndroid.SHORT);
        }
      });
    }
  }
  render() {
    return (
      <View>
        <Text >居家养老平台</Text>
        <TextInput
          value={this.state.userId}
          onChangeText={txt => this.setState({ userId: txt })}
          placeholder='请输入账号' />
        <TextInput
          secureTextEntry
          value={this.state.password}
          onChangeText={txt => this.setState({ password: txt })}
          placeholder='请输入密码' />
        <View>
          <Button
            title='登陆'
            onPress={ev => this.doLogin(ev)} />
          <Button
            title='注册'
            onPress={ev => this.props.history.push('/register')} />
        </View>
      </View>
    );
  }
}

export default Login;
