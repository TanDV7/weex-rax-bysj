/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 19:41:36
        Filename: UserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  Text, ScrollView
} from 'react-native';
import { observer } from 'mobx-react';
import { Flex, Card, Button } from 'antd-mobile';

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
        userSex: json.user_Gender,
        userIdNumber: json.user_Id_Numbe,
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
              <ScrollView>
                <Text style={Style.blankBorder}>用户信息</Text>
                <Text style={Style.blankBorder}>账号</Text>
                <Text style={Style.belowBorder}>{Model.state.userId}</Text>
                <Text style={Style.blankBorder}>用户名</Text>
                <Text style={Style.belowBorder}>{this.state.userName}</Text>
                <Text style={Style.blankBorder}>年龄</Text>
                <Text style={Style.belowBorder}>{this.state.userAge}</Text>
                <Text style={Style.blankBorder}>性别</Text>
                <Text style={Style.belowBorder}>{this.state.userSex}</Text>
                <Text style={Style.blankBorder}>手机</Text>
                <Text style={Style.belowBorder}>{this.state.userPhone}</Text>
                <Text style={Style.blankBorder}>身份证号</Text>
                <Text style={Style.belowBorder}>{this.state.userIdNumber}</Text>
                <Button
                  style={Style.blankBorder}
                  type='primary'
                  onClick={ev => this.props.history.push(`/edituserinfo/${this.state.userPassword}`)}>编辑</Button>
                <Button
                  style={Style.blankBorder}
                  type='primary'
                  onClick={() => {
                    Model.setState({
                      userId: ''
                    });
                    this.props.history.replace('/');
                  }}>注销</Button>
              </ScrollView>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default UserInfo;
