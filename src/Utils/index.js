/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-29 00:15:44
        Filename: index.js
        Description: Created by TanDV7 using vim automatically.
**/
async function doPost(sql, func) {
  return fetch('http://123.206.211.92/sql.php', {
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    mode: 'cors',
    body: `sql=${encodeURIComponent(sql)}`
  })
  .then(res => res.json());
}

export { doPost };
