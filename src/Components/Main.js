/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-28 09:58:42
        Filename: Main.js
        Description: Created by TanDV7 using vim automatically.
**/
import React from 'react';
import {
  View, Button, Text
} from 'react-native';

function Main(props) {
  return (
    <View>
      <View>
        <Text >主界面</Text>
      </View>
      <View >
        <Button
          title='医疗档案'
          onPress={ev => props.history.push('/medical')} />
        <Button
          title='服务内容'
          onPress={ev => props.history.push('/serivce')} />
        <Button
          title='活动内容'
          onPress={() => {}} />
        <Button
          title='订阅内容'
          onPress={() => {}} />
        <Button
          title='用户管理'
          onPress={ev => props.history.push('/userinfo')} />
      </View>
    </View>
  );
}

export default Main;
