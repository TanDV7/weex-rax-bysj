/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 19:05:57
        Filename: App.js
        Description: Created by TanDV7 using vim automatically.
**/
/* eslint-disable */
import { Component, createElement } from 'rax';
/* eslint-enable */
import View from 'rax-view';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Main from '../Components/Main';
import Medical from '../Components/Medical';
import UserInfo from '../Components/UserInfo';
import Service from '../Components/Service';
import styles from '../Styles/index.css';

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
  toMain(ev) {
    this.setState({
      name: 'Main'
    });
  }
  toRegister(ev) {
    this.setState({
      name: 'Register'
    });
  }
  toMedical(ev) {
    this.setState({
      name: 'Medical'
    });
  }
  toUserInfo(ev) {
    this.setState({
      name: 'UserInfo'
    });
  }
  toService(ev) {
    this.setState({
      name: 'Service'
    });
  }
  render() {
    let child = (<Login
      setUserId={id => this.setUserId(id)}
      toRegister={ev => this.toRegister(ev)}
      toMain={ev => this.toMain(ev)} />);
    switch (this.state.name) {
      case 'Main':
        child = (<Main
          toMedical={ev => this.toMedical(ev)}
          toService={ev => this.toService(ev)}
          toUserInfo={ev => this.toUserInfo(ev)} />);
        break;
      case 'Register':
        child = (<Register
          toMain={ev => this.toMain(ev)} />);
        break;
      case 'Medical':
        child = (<Medical
          userId={this.state.userId} />);
        break;
      case 'Service':
        child = (<Service />);
        break;
      case 'UserInfo':
        child = (<UserInfo
          userId={this.state.userId} />);
        break;
      default:
        break;
    }
    return (
      <View style={styles.app}>
        {child}
      </View>
    );
  }
}

export default App;
