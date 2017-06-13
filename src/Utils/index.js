/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-06-13 10:47:17
        Filename: index.js
        Description: Created by TanDV7 using vim automatically.
**/
async function doPost(sql, all = false) {
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

export { doPost, getNowTime };
