const express = require('express')
const router = express.Router()
const usersController = require('../controller/user.Controller');
const auth = require('../middleware/auth')


router.route('/users')
.post(usersController.postUser)
.get(usersController.getUsers);

router.route('/users/:userId')
.get(usersController.getUserById)
.put(usersController.updateUserById)
.delete(usersController.deleteUserById);

router.route('/users/login')
.post(usersController.loginUser)

router.route('/users/logout')
.post(auth,usersController.logoutUser)


module.exports = router