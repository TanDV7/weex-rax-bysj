/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 19:30:31
        Filename: Service.js
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

class Service extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      myDataSource: this.ds.cloneWithRows([]),
      dataSource: this.ds.cloneWithRows([])
    };
  }
  async componentDidMount() {
    let json = await doPost('select * from service', true);
    const service = json;
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
    json = await doPost(`select service_id from user_service where user_id='${Model.state.userId}'`, true);
    try {
      if (json.error) {
        // TODO
      }
      json = json.map((s) => {
        for (let i = 0; i < service.length; ++i) {
          if (service[i][0] === s[0]) {
            return service[i];
          }
        }
      });
      this.setState({
        myDataSource: this.ds.cloneWithRows(json)
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
            <Card.Body style={Style.blankPadding}>
              <ScrollView>
                <ListView
                  renderHeader={() => (<Text>所有服务</Text>)}
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <Flex style={Style.blankBorder}>
                      <Flex.Item style={Style.grow4}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/serviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Image
                            style={{ width: 32, height: 32 }}
                            source={{ uri: `http://123.206.211.92/${rowData[2]}` }} />
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item style={Style.grow1}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/serviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Text>{rowData[1]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item style={Style.grow1}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/serviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Text>{rowData[4]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                    </Flex>
                  )} />
                <ListView
                  renderHeader={() => (<Text>我的服务</Text>)}
                  dataSource={this.state.myDataSource}
                  renderRow={rowData => (
                    <Flex style={Style.blankBorder}>
                      <Flex.Item style={Style.grow4}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/myserviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Image
                            style={{ width: 32, height: 32 }}
                            source={{ uri: `http://123.206.211.92/${rowData[2]}` }} />
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item style={Style.grow1}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/myserviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Text>{rowData[1]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item style={Style.grow1}>
                        <TouchableHighlight
                          onPress={() => this.props.history.push(`/myserviceinfo/${rowData[0]}`)}
                          underlayColor='#ffffff'>
                          <Text>{rowData[4]}</Text>
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

export default Service;
