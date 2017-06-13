/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-28 17:17:52
        Filename: Act.js
        Description: Created by TanDV7 using vim automatically.
**/

import React, { Component } from 'react';
import {
  TouchableHighlight, ScrollView, Image, Text, ListView
} from 'react-native';
// import { observer } from 'mobx-react';
import { Flex, Card } from 'antd-mobile';

// `import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

class Act extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userId: '',
      dataSource: this.ds.cloneWithRows([])
    };
  }
  async componentDidMount() {
    const json = await doPost('select act_Name,act_id from act', true);
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
              <Text>活动列表</Text>
              <ScrollView>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <Flex>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/actinfo/${rowData[1]}`)}
                          underlayColor='#3366ff'>
                          <Text>{rowData[0]}</Text>
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
