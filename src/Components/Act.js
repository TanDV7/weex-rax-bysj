/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 21:45:44
        Filename: Act.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  TouchableHighlight, ScrollView, Image, Text, ListView
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class Act extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userId: '',
      dataSource: this.ds.cloneWithRows([]),
      myDataSource: this.ds.cloneWithRows([])
    };
  }
  async componentDidMount() {
    let jsonALL = await doPost('select act_Name,act_id from act where act_Status=\'报名中\'', true);
    try {
      if (jsonALL.error) {

      }
      this.setState({
        dataSource: this.ds.cloneWithRows(jsonALL)
      });
    } catch (e) {

    }
    let jsonMy = await doPost(`select act_Name,act_id from act where act_id in (select act_id from user_act where user_Id='${Model.state.userId}')`, true);
    try {
      if (jsonMy.error) {

      }
      this.setState({
        myDataSource: this.ds.cloneWithRows(jsonMy)
      });
    } catch (e) {

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
                  enableEmptySections
                  renderHeader={() => (<Text style={Style.blankBorder}>所有活动</Text>)}
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <Flex>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/actinfo/${rowData[1]}`)}
                          underlayColor='#3366ff'>
                          <Text style={Style.belowBorder}>{rowData[0]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                    </Flex>
                  )} />
                <ListView
                  enableEmptySections
                  renderHeader={() => (<Text style={Style.blankBorder}>我的活动</Text>)}
                  dataSource={this.state.myDataSource}
                  renderRow={rowData => (
                    <Flex>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/myact/${rowData[1]}`)}
                          underlayColor='#3366ff'>
                          <Text style={Style.belowBorder}>{rowData[0]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                    </Flex>
                  )} />
              </ScrollView>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Act;
