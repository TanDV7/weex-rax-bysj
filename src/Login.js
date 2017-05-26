/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 10:28:11
        Filename: Login.js
        Description: Created by TanDV7 using vim automatically.
**/
import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import TextInput from 'rax-textinput';
import styles from './App.css';
import Toast from 'universal-toast';

import { doPost } from './utils.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: ''
        };
    }
    render() {
        return (
            <View>
                <Text
                    style={styles.appBanner}>居家养老平台</Text>
                <TextInput
                    value={this.state.userId}
                    onInput={ev => this.setState({userId: ev.value})}
                    keyboardType='default'
                    placeholder='请输入账号'
                    style={styles.textInput}></TextInput>
                <TextInput
                    value={this.state.password}
                    onInput={ev => this.setState({password: ev.value})}
                    keyboardType='default'
                    password='true'
                    placeholder='请输入密码'
                    style={styles.textInput}></TextInput>
                <View 
                    style={styles.appIntro}>
                    <Button
                        onPress={ev => this.doLogin(ev)}>登陆</Button>
                    <Button
                        onPress={ev => this.props.toRegister(ev)}>注册</Button>
                </View>
            </View>
        );
    }
    doLogin(ev) {
        if(this.state.userId === ''){
            Toast.show('账号不能为空', Toast.SHORT); 
        }
        else if(this.state.password === ''){
            Toast.show('密码不能为空', Toast.SHORT);
        }
        else{
            doPost('select user_password from users where user_Id=' + this.state.userId, json => {
                if(json.user_password === this.state.password){
                    this.props.setUserId(this.state.userId);
                    Toast.show('登录成功', Toast.LONG);
                    this.props.toMain(ev);
                }
                else if(json.errno) {
                    Toast.show('密码错误', Toast.SHORT);
                }
            });
        }
    }
}

export default Login;
