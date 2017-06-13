/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-10 16:01:52
        Filename: src/Components/Main.js
        Description: Created by TanDV7 using vim automatically.
**/
import React from 'react';
import { Modal, Icon, Grid, Flex, Card } from 'antd-mobile';

import Style from '../Styles';

const data = [
  {
    icon: <Icon type={'\ue699'} />,
    text: '医疗档案',
    onClick: props => props.history.push('/medical')
  },
  {
    icon: <Icon type={'\ue65f'} />,
    text: '服务内容',
    onClick: props => props.history.push('/service')
  },
  {
    icon: <Icon type={'\ue90f'} />,
    text: '活动内容',
    onClick: props => props.history.push('/act')
  },
  {
    icon: <Icon type={'\ue665'} />,
    text: '订阅内容',
    onClick: () => {}
  },
  {
    icon: <Icon type={'\ue6a8'} />,
    text: '用户管理',
    onClick: props => props.history.push('/userinfo')
  },
  {
    icon: <Icon type={'\ue67c'} />,
    text: '关于软件',
    onClick: () => Modal.alert('Info', '我是你爸爸！')
  }
];

function Main(props) {
  return (
    <Flex style={Style.blankBorder}>
      <Flex.Item >
        <Card>
          <Card.Header title='居家养老平台' />
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
