/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-27 15:28:46
        Filename: index.js
        Description: Created by TanDV7 using vim automatically.
**/
import { BackHandler } from 'react-native';

let isBackHandlerSet = false;

function doPost(sql, func) {
  fetch('http://123.206.211.92/sql.php', {
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    mode: 'cors',
    body: `sql=${encodeURIComponent(sql)}`
  })
  .then(res => res.json())
  .then(json => func(json));
}

function setBackHandler(history) {
  if (isBackHandlerSet) {
    return;
  }
  isBackHandlerSet = true;
  BackHandler.addEventListener('hardwareBackPress', () => {
    if (history.length <= 1) {
      return true;
    }
    history.goBack();
    return false;
  });
}

export { doPost, setBackHandler };
