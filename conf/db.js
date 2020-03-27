// conf/db.js
// MySQL数据库联接配置
var mysql = require('mysql');
module.exports = {
    mysql: {
        host: 'localhost', 
        user: 'root',
        password: 'yk19990131',
        database:'nodejs', // 前面建的user表位于些数据库中
        port: 3306
    },
    
    sqlConnection:function(sql, sqlArr, callBack){
        var pool = mysql.createPool(this.mysql);
        pool.getConnection((err, coon) => {
            console.log('123456');
            if(err){
                console.log('连接失败');
                return;
            }
            coon.query(sql, sqlArr, callBack);

            coon.release();
        })
    }
};
