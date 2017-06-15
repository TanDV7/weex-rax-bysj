/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-06-14 22:44:16
        Filename: NewsInfo.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import { WebView, ScrollView } from 'react-native';
import { Flex, Card } from 'antd-mobile';

import Style from '../Styles';
import { doPost } from '../Utils';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      html: ''
    };
  }
  async componentDidMount() {
    try {
      const json = await doPost(`select nr_id,nr_name,nr_zhuti from nr where nr_id='${this.props.match.params.id}'`);
      if (json.error) {
        // TODO
        return;
      }
      this.setState({
        title: json.nr_name,
        html: json.nr_miaoshu
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
            <Card.Header title={this.state.title} />
            <Card.Body
              style={[Style.blankBorder, {

              }]}>
              <ScrollView>
                <WebView
                  style={{
                    height: 1000
                  }}
                  source={{
                    uri: `http://123.206.211.92/nnnn.php?id=${this.props.match.params.id}`
                  }}></WebView>
              </ScrollView>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Main;
