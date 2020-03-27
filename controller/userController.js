var $db = require('../conf/db.js');
var $sql = require('../dao/userDAO.js');
getUser=(req,res)=>{
    var sql = $sql.userAll;
    var sqlArr = [];
    var callBack=(err,data)=>{
      if(err){
        console.log('连接出错');
      }else{
        res.send({
          'list': data
        })
      }
      
    }
    $db.sqlConnection(sql, sqlArr, callBack);
}
getUserById=(req, res)=>{
    let {id} = req.query;
    var sql = $sql.userById;
    var sqlArr = [id];
    var callBack=(err,data)=>{
        if(err){
          console.log('连接出错');
        }else{
          res.send({
            'list': data
          })
        }
        
      }
      $db.sqlConnection(sql, sqlArr, callBack);
}
module.exports={
    getUser,
    getUserById
};