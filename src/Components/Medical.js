/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-28 10:15:43
        Filename: Medical.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  ScrollView, Image, Text, ListView, TouchableHighlight, View
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card, Button } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class Medical extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userId: '',
      dataSource: this.ds.cloneWithRows([])
    }
  }
  async componentDidMount() {
    const json = await doPost(`select med_name from med where user_id='${Model.state.userId}'`, true);
    console.log(json);
    try {
      if (json.error) {
        // TODO
      }
      this.setState({
        dataSource: this.ds.cloneWithRows(json)
      });
    } catch (e) {
      // TODO
    }
  }
  render() {
    return (
      <Flex style={Style.blankBorder}>
        <Flex.Item >
          <Card>
            <Card.Header title='居家养老平台' />
            <Card.Body>
              <ScrollView>
                <ListView
                  renderHeader={() => (<Text>所有档案</Text>)}
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <Flex>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.props.history.push}
                          underlayColor='#3366ff'>
                          <Text>{rowData[0]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                    </Flex>
                  )} />
              </ScrollView>
              <Button>新建档案</Button>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Medical;
