/**
        Author: TanDV7 - tandv7@outlook.com
        Last modified: 2017-05-24 11:42:31
        Filename: utils.js
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
