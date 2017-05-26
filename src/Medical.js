/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 10:24:07
        Filename: Medical.js
        Description: Created by TanDV7 using vim automatically.
**/

import {createElement,Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import TextInput from 'rax-textinput';
import styles from './App.css';

class Medical extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.app}>
                <Text style={styles.appBanner}>医疗档案</Text>
            </View>
        )
    }
}

export default Medical;
