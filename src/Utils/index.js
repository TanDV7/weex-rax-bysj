/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-26 19:04:43
        Filename: index.js
        Description: Created by TanDV7 using vim automatically.
**/
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

export { doPost };
