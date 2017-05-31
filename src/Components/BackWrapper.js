/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-05-31 21:35:33
        Filename: src/Components/BackWrapper.js
        Description: Created by SpringHack using vim automatically.
**/
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, BackHandler } from 'react-native';
import { Flex } from 'antd-mobile';

import Style from '../Styles';

let isSet = false;
let lastBack = 0;

export default class BackWrapper extends Component {
  componentDidMount() {
    if (isSet) return;
    isSet = true;
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (lastBack && lastBack + 300 >= Date.now()) {
        BackHandler.exitApp();
        return true;
      }
      lastBack = Date.now();
      this.props.history.goBack();
      return true;
    });
  }
  render() {
    if (this.props.location.pathname === '/') {
      return (<View />);
    }
    return (
      <Flex style={Style.navBar}>
        <Flex.Item style={Style.navBarBack}>
          <TouchableHighlight underlayColor='#fff' onPress={() => this.props.history.goBack()}>
            <Text>{'< 返回'}</Text>
          </TouchableHighlight>
        </Flex.Item>
        <Flex.Item>
          <Text style={Style.navBarTitle}>{this.props.location.pathname}</Text>
        </Flex.Item>
        <Flex.Item style={Style.navBarBack}>
          <View />
        </Flex.Item>
      </Flex>
    );
  }
}
