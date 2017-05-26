/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-23 09:47:03
        Filename: Main.js
        Description: Created by TanDV7 using vim automatically.
**/

import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import TextInput from 'rax-textinput';
import {Row, Col} from 'rax-grid';
import styles from './App.css';

class Main extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.app}>
                <View style={styles.appBanner}>
                    <Text style={styles.appBanner}>主界面</Text>
                </View>
                <View style={styles.appBanner}>
                    <Row style={styles.appIntro}>
                        <Col>
                            <Button
                                onPress={ev => this.props.toMedical(ev)}
                                style={styles.button}>医疗档案</Button>
                        </Col>
                        <Col>
                            <Button
                                onPress={ev => this.props.toService(ev)}
                                style={styles.button}>服务内容</Button>
                        </Col>
                        <Col>
                            <Button style={styles.button}>活动内容</Button>
                        </Col>
                    </Row>
                    <Row style={styles.appIntro}>
                        <Col>
                            <Button style={styles.button}>订阅内容</Button>
                        </Col>
                        <Col>
                            <Button></Button>
                        </Col>
                        <Col>
                            <Button
                                onPress={ev => this.props.toUserInfo(ev)}
                                style={styles.button}>用户管理</Button>
                        </Col>
                    </Row>
                </View>
            </View>
        );
    }
}

export default Main;
