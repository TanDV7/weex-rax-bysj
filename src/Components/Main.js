/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 09:37:16
        Filename: Main.js
        Description: Created by TanDV7 using vim automatically.
**/
import React from 'react';
import {
  View, Button, Text
} from 'react-native';

// import styles from '../Styles/index.css';
const styles = {};

function Main() {
  return (
    <View style={styles.app}>
      <View style={styles.appBanner}>
        <Text style={styles.appBanner}>主界面</Text>
      </View>
      <View style={styles.appBanner}>
        <Button
          onPress={ev => this.props.toMedical(ev)}
          style={styles.button}>医疗档案</Button>
        <Button
          onPress={ev => this.props.toService(ev)}
          style={styles.button}>服务内容</Button>
        <Button style={styles.button}>活动内容</Button>
        <Button style={styles.button}>订阅内容</Button>
        <Button
          onPress={ev => this.props.toUserInfo(ev)}
          style={styles.button}>用户管理</Button>
      </View>
    </View>
  );
}

export default Main;
