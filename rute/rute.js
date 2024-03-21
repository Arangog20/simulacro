const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersCont');

router.get('/api/usersLogin', userController.getAllUsers);

module.exports = router;