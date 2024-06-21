const express = require('express');
const { register, login, listUsers, getUserDetails } = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', jwtMiddleware, listUsers);
router.get('/user', jwtMiddleware, getUserDetails);

module.exports = router;
