/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 19:09:58
        Filename: src/Components/Medical.js
        Description: Created by TanDV7 using vim automatically.
**/

/* eslint-disable */
import { Component, createElement } from 'rax';
/* eslint-enable */
import View from 'rax-view';
import Text from 'rax-text';
import styles from '../Styles/index.css';

function Medical() {
  return (
    <View style={styles.app}>
      <Text style={styles.appBanner}>医疗档案</Text>
    </View>
  );
}

export default Medical;
