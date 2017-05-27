/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 15:23:17
        Filename: src/Components/App.js
        Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Register from '../Components/Register';
import Login from '../Components/Login';
import Main from '../Components/Main';
import Medical from '../Components/Medical';
import UserInfo from '../Components/UserInfo';
import Service from '../Components/Service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Login',
      userId: ''
    };
  }
  setUserId(userId) {
    this.setState({
      userId
    });
  }
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/medical' component={Medical} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/userinfo' component={UserInfo} />
        </Switch>
      </NativeRouter>
    );
  }
}

export default App;
