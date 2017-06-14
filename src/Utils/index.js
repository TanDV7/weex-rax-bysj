/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-14 20:10:54
        Filename: index.js
        Description: Created by TanDV7 using vim automatically.
**/
import { Modal } from 'antd-mobile';

const desc = `    本居家养老平台APP是为了给选择居家养老方式的老年人开发的移动端应用程序。根据近些年来的相关调查数据显示，中国已经进入了老龄化社会，目前中国的情况是超过90%的老年人都会选择居家养老。而随着电子信息技术和互联网的快速发展。手机平台处理性能的提升，手机已经可以处理越来越多的数据。本平台就是在这样一个背景下，利用互联网平台，将信息技术、人工智能与居家养老服务机制建设相融合，通过搭建一个信息开放平台，提供个性、高效、一站式智慧养老服务。
    本App采用React Native技术，使用Java和JavaScript相结合的开发模式，本地缓存数据库系统采用了AsyncStorage，采用了Flux架构进行开发。经系统的测试表明，本App可以运行，运行效果比较良好，能正确的提供相应的养老服务，达到了整个毕业设计的具体要求。`;

async function networkIsOK() {
  try {
    const res = await fetch('http://123.206.211.92/204.php');
    if (res.status !== 204) {
      throw new Date();
    }
    return true;
  } catch (e) {
    return false;
  }
}

async function doPost(sql, all = false) {
  const net = await networkIsOK();
  if (!net) {
    Modal.alert('警告', '当前没有网络,数据来自缓存!');
    return { nonet: true };
  }
  let url = 'http://123.206.211.92/sql.php';
  if (all) {
    url = 'http://123.206.211.92/sqlall.php';
  }
  return fetch(url, {
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    mode: 'cors',
    body: `sql=${encodeURIComponent(sql)}`
  })
  .then(res => res.json());
}

function setDig(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

function getNowTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  return `${year}${setDig(month)}${setDig(day)}${setDig(hour)}${setDig(minute)}`;
}

export { desc, doPost, getNowTime };
