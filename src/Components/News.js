/**
      Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 22:43:18
        Filename: News.js
      Description: Created by TanDV7 using vim automatically.
**/
import React, { Component } from 'react';
import {
  TouchableHighlight, ScrollView, Text, ListView
} from 'react-native';
import { observer } from 'mobx-react';
import { Button, Flex, Card } from 'antd-mobile';

import Model from '../Model';
import { doPost } from '../Utils';
import Style from '../Styles';

@observer class News extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.ding = [];
    this.state = {
      userId: '',
      ooo: [],
      dataSource: this.ds.cloneWithRows([])
    };
  }
  async componentDidMount() {
    try {
      const ding = await doPost(`select news_tab from user_news_tab where user_Id='${Model.state.userId}'`, true);
      this.ding = ding.map(t => t[0]);
      const json = await doPost('select nr_id,nr_name,nr_zhuti from nr order by nr_zhuti', true);
      if (json.error) {
        // TODO
      }
      this.setState({
        ooo: json,
        dataSource: this.ds.cloneWithRows(json)
      });
    } catch (e) {
      // TODO
    }
  }
  async Inc(tt) {
    try {
      const json = doPost(`insert into user_news_tab values('${Model.state.userId}','${tt}')`);
      if (json.error) {
        // TODO
        return;
      }
      this.props.history.replace('/main');
    } catch (e) {
      // TODO
    }
  }
  async Dec(tt) {
    try {
      const json = doPost(`delete from user_news_tab where user_Id='${Model.state.userId}' and news_tab='${tt}'`);
      if (json.error) {
        // TODO
        return;
      }
      this.props.history.replace('/main');
    } catch (e) {
      // TODO
    }
  }
  showNews(id) {
    this.props.history.push(`/newsinfo/${id}`);
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
                  renderHeader={() => (<Text style={Style.blankBorder}>新闻订阅详情</Text>)}
                  dataSource={this.state.dataSource}
                  renderRow={rowData => (
                    <Flex>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.showNews(rowData[0])}
                          underlayColor='#fff'>
                          <Text style={Style.belowBorder}>{rowData[1]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item>
                        <TouchableHighlight
                          onPress={() => this.showNews(rowData[0])}
                          underlayColor='#fff'>
                          <Text style={Style.belowBorder}>{rowData[2]}</Text>
                        </TouchableHighlight>
                      </Flex.Item>
                      <Flex.Item style={Style.blankBorder}>
                        {
                          (this.ding.includes(rowData[2])) ?
                            <Button onClick={() => this.Dec(rowData[2])}>取订</Button> :
                            <Button type='primary' onClick={() => this.Inc(rowData[2])}>订阅</Button>
                        }
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

export default News;
