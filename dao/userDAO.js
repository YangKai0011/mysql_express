var userDAO ={
    //增
	userinsert:'INSERT INTO `users` (`id`,`name`) VALUES(?,?)',
	//删
	userdelete: 'delete from users where id=?',
	//改
	userupdate:'UPDATE `users` SET `name`=? WHERE `id`=?',
    //查
    userAll: 'select * from users',
    userById: 'select * from users where id=?'
}

module.exports=userDAO;