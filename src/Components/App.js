/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 15:23:17
        Filename: src/Components/App.js
        Description: Created by TanDV7 using vim automatically.
**/
import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { View } from 'react-native';

import Register from '../Components/Register';
import Login from '../Components/Login';
import Main from '../Components/Main';
import Medical from '../Components/Medical';
import UserInfo from '../Components/UserInfo';
import Service from '../Components/Service';
import BackWrapper from '../Components/BackWrapper';

function App() {
  return (
    <NativeRouter>
      <View>
        <Route path='/' component={BackWrapper} />
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/medical' component={Medical} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/userinfo' component={UserInfo} />
      </View>
    </NativeRouter>
  );
}

export default App;
