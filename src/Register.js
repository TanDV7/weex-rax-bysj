/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-25 10:47:37
        Filename: Register.js
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

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            rptPassword: ''
        };
    }
    render() {
        return (
            <View style={styles.app}>
                <Text style={styles.appBanner}>注册</Text>
                <View style={styles.appBanner}>
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
                    <TextInput
                        value={this.state.rptPassword}
                        onInput={ev => this.setState({rptPassword: ev.value})}
                        keyboardType='default'
                        password='true'
                        placeholder='再次输入密码'
                        style={styles.textInput}></TextInput>
                    <Button
                        onPress={ev => this.doRegister(ev)}>注册并登录</Button>
                </View>
            </View>
        )
    }
    doRegister(ev) {
        const sql = `insert into users(user_Id,user_password) 
                    values('${this.state.userId}','${this.state.password}')`;
        if(this.state.user === ''){
            Toast.show('请输入账号', Toast.SHORT);
        }
        else if(this.state.password === ''){
            Toast.show('请输入密码', Toast.SHORT);
        }
        else if(this.state.rptPassword !== this.state.password){
            Toast.show('请保证两次密码一致', Toast.SHORT);
        }
        else{
            doPost(sql, json=>{
                if (json.errno) {
                    Toast.show('用户已存在', Toast.SHORT);
                }
                else{
                    Toast.show('注册并登录成功', Toast.SHORT);
                    this.props.toMain(ev);
                }
            });
        }
    }
}

export default Register;
