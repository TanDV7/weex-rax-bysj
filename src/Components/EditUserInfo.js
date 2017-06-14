/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 19:58:05
        Filename: EditUserInfo.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import { Modal, Flex, Card, Button, InputItem, Radio } from 'antd-mobile';
import { observer } from 'mobx-react';
import { Text } from 'react-native';

import Model from '../Model';
import Style from '../Styles';
import { doPost } from '../Utils';

const RadioItem = Radio.RadioItem;

class EditUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userAge: '',
      userPhone: '',
      userIdNumber: '',
      oldPassword: '',
      newPassword: '',
      userSex: '男'
    };
  }
  async doUpdateUserInfo(ev) {
    try {
      if (this.props.match.params.password !== this.state.oldPassword) {
        Modal.alert('消息', '请输入正确的原密码');
      } else if (this.state.newPassword === '') {
        const json = await doPost(`update users set user_name='${this.state.userName}',user_Age='${this.state.userAge}',user_Gender='${this.state.userSex}',user_Phone='${this.state.userPhone}',user_Id_Number='${this.state.userIdNumber}' where user_Id='${Model.state.userId}'`);
        Modal.alert('消息', '修改成功', [
            { text: '确定', onPress: () => this.props.history.replace('/userinfo') }
        ]);
      } else {
        const json = await doPost(`update users set user_name='${this.state.userName}',user_Age='${this.state.userAge}',user_Gender='${this.state.userSex}',user_Phone='${this.state.userPhone}',user_Id_Number='${this.state.userIdNumber}',user_password='${this.state.newPassword}' where user_Id='${Model.state.userId}'`);
        Modal.alert('消息', '修改成功', [
            { text: '确定', onPress: () => this.props.history.replace('/userinfo') }
        ]);
      }
    } catch (e) {

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
                value={this.state.userName}
                onChange={txt => this.setState({ userName: txt })}
                placeholder='请输入姓名'>用户名</InputItem>
              <InputItem
                maxLength={3}
                value={this.state.userAge}
                onChange={txt => this.setState({ userAge: txt })}
                type='number'
                placeholder='请输入年龄'>年龄</InputItem>
              <Flex>
                <Flex.Item>
                  <InputItem maxLength={0} editable={false}>年龄</InputItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.userSex === '男'} onChange={() => this.setState({ userSex: '男' })}>
                    男
                  </RadioItem>
                </Flex.Item>
                <Flex.Item>
                  <RadioItem checked={this.state.userSex === '女'} onChange={() => this.setState({ userSex: '女' })}>
                    女
                  </RadioItem>
                </Flex.Item>
              </Flex>
              <InputItem
                maxLength={13}
                value={this.state.userPhone}
                onChange={txt => this.setState({ userPhone: txt })}
                type='phone'
                placeholder='请输入手机'>手机</InputItem>
              <InputItem
                maxLength={18}
                value={this.state.userIdNumber}
                onChange={txt => this.setState({ userIdNumber: txt })}
                type='number'
                placeholder='请输入身份证号'>身份证号</InputItem>
              <InputItem
                type='password'
                onChange={txt => this.setState({ oldPassword: txt })}
                value={this.state.oldPassword}
                placeholder='请输入正确的原密码'>原密码</InputItem>
              <InputItem
                type='password'
                onChange={txt => this.setState({ newPassword: txt })}
                value={this.state.newPassword}
                placeholder='请输入新密码(可以为空)'>新密码</InputItem>
              <Button
                style={Style.blankBorder}
                onClick={ev => this.doUpdateUserInfo()}
                type='primary'>确认</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default EditUserInfo;
