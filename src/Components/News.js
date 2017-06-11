/**
      Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-31 15:59:21
        Filename: src/Components/News.js
      Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
  }
  render() {
    return (
      <View>
        <Text>内容订阅</Text>
      </View>
    );
  }
}

export default News;
