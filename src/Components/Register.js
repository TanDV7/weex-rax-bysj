/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 09:39:48
        Filename: Register.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  Button, View, Text, TextInput, ToastAndroid
} from 'react-native';
// import styles from '../Styles/index.css';

import { doPost } from '../Utils';

const styles = {};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      rptPassword: ''
    };
  }
  doRegister(ev) {
    const sql = `insert into users(user_Id,user_password) 
                    values('${this.state.userId}','${this.state.password}')`;
    if (this.state.user === '') {
      ToastAndroid.show('请输入账号', ToastAndroid.SHORT);
    } else if (this.state.password === '') {
      ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
    } else if (this.state.rptPassword !== this.state.password) {
      ToastAndroid.show('请保证两次密码一致', ToastAndroid.SHORT);
    } else {
      doPost(sql, (json) => {
        if (json.errno) {
          ToastAndroid.show('用户已存在', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('注册并登录成功', ToastAndroid.SHORT);
          this.props.toMain(ev);
        }
      });
    }
  }
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.appBanner}>注册</Text>
        <View style={styles.appBanner}>
          <TextInput
            value={this.state.userId}
            onInput={ev => this.setState({ userId: ev.value })}
            keyboardType='default'
            placeholder='请输入账号'
            style={styles.textInput} />
          <TextInput
            value={this.state.password}
            onInput={ev => this.setState({ password: ev.value })}
            keyboardType='default'
            password='true'
            placeholder='请输入密码'
            style={styles.textInput} />
          <TextInput
            value={this.state.rptPassword}
            onInput={ev => this.setState({ rptPassword: ev.value })}
            keyboardType='default'
            password='true'
            placeholder='再次输入密码'
            style={styles.textInput} />
          <Button
            onPress={ev => this.doRegister(ev)}>注册并登录</Button>
        </View>
      </View>
    );
  }
}

export default Register;
