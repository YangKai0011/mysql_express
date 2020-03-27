var express = require('express');
var router = express.Router();
var $user = require('../controller/userController.js');
/* GET home page. */
router.get('/', $user.getUser);
router.get('/getUserById',$user.getUserById);


module.exports = router;
