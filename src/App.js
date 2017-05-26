/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 10:18:09
        Filename: App.js
        Description: Created by TanDV7 using vim automatically.
**/
import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import TextInput from 'rax-textinput';
import styles from './App.css';

import Register from './Register.js';
import Login from './Login.js';
import Main from './Main.js';
import Medical from './Medical.js';
import UserInfo from './UserInfo.js';
import Service from './Service.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Login',
            userId: ''
        };
    }
    render() {
        let child = <Login
                        setUserId={id => this.setUserId(id)}
                        toRegister={ev => this.toRegister(ev)}
                        toMain={ev => this.toMain(ev)} />;
        switch (this.state.name) {
            case 'Main':
                child = <Main
                            toMedical={ev => this.toMedical(ev)}
                            toService={ev => this.toService(ev)}
                            toUserInfo={ev => this.toUserInfo(ev)} />;
            break;
            case 'Register':
                child = <Register
                            toMain={ev => this.toMain(ev)} />;
                break;
            case 'Medical':
                child = <Medical
                            userId={this.state.userId} />;
                break;
            case 'Service':
                child = <Service />;
                break;
            case 'UserInfo':
                child = <UserInfo 
                            userId={this.state.userId} />;
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
}
    
export default App;
