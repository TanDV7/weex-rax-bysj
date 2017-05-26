/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-23 14:16:02
        Filename: Service.js
        Description: Created by TanDV7 using vim automatically.
**/

import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import TextInput from 'rax-textinput';
import {Row, Col} from 'rax-grid';
import styles from './App.css';

class Service extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.appBanner}>服务列表</Text>
            </View>
        );
    }
}

export default Service;
