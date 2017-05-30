/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-30 20:51:32
        Filename: Main.js
        Description: Created by TanDV7 using vim automatically.
**/
import React from 'react';
import { Modal, Icon, Grid, Flex, Card } from 'antd-mobile';

import Style from '../Styles';

const data = [
  {
    icon: <Icon type='check' />,
    text: '医疗档案',
    onClick: props => props.history.push('/medical')
  },
  {
    icon: <Icon type='check' />,
    text: '服务内容',
    onClick: props => props.history.push('/service')
  },
  {
    icon: <Icon type='check' />,
    text: '活动内容',
    onClick: () => {}
  },
  {
    icon: <Icon type='check' />,
    text: '订阅内容',
    onClick: () => {}
  },
  {
    icon: <Icon type='check' />,
    text: '用户管理',
    onClick: props => props.history.push('/userinfo')
  },
  {
    icon: <Icon type='check' />,
    text: '关于软件',
    onClick: () => Modal.alert('Info', '我是你爸爸！')
  }
];

function Main(props) {
  return (
    <Flex style={Style.blankBorder}>
      <Flex.Item >
        <Card>
          <Card.Header title='主界面' />
          <Card.Body style={Style.blankBorder}>
            <Grid
              hasLine
              columnNum={3}
              data={data}
              onClick={(el, index) => data[index].onClick.call(this, props)} />
          </Card.Body>
        </Card>
      </Flex.Item>
    </Flex>
  );
}

export default Main;
