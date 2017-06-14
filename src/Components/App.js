/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 22:43:35
        Filename: App.js
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
import EditUserInfo from '../Components/EditUserInfo';
import Service from '../Components/Service';
import Act from '../Components/Act';
import BackWrapper from '../Components/BackWrapper';
import ActInfo from '../Components/ActInfo';
import MyService from '../Components/MyService';
import ServiceInfo from '../Components/ServiceInfo';
import MyAct from '../Components/MyAct';
import News from '../Components/News';
import NewsInfo from '../Components/NewsInfo';

function App() {
  return (
    <NativeRouter>
      <View>
        <Route path='/' component={BackWrapper} />
        <Route exact path='/' component={Login} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/medical' component={Medical} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/act' component={Act} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/userinfo' component={UserInfo} />
        <Route exact path='/edituserinfo/:password' component={EditUserInfo} />
        <Route exact path='/actinfo/:name' component={ActInfo} />
        <Route exact path='/myservice/:name' component={MyService} />
        <Route exact path='/serviceinfo/:name' component={ServiceInfo} />
        <Route exact path='/myact' component={MyAct} />
        <Route exact path='/news' component={News} />
        <Route exact path='/newsinfo/:id' component={NewsInfo} />
      </View>
    </NativeRouter>
  );
}

export default App;
