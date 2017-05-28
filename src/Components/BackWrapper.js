/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-05-28 09:55:49
        Filename: BackWrapper.js
        Description: Created by SpringHack using vim automatically.
**/
import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';

let isSet = false;
let lastBack = 0;

export default class BackWrapper extends Component {
  componentDidMount() {
    if (isSet) return;
    isSet = true;
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (lastBack && lastBack + 1000 >= Date.now()) {
        BackHandler.exitApp();
        return true;
      }
      lastBack = Date.now();
      this.props.history.goBack();
      return true;
    });
  }
  render() {
    return (<View />);
  }
}
