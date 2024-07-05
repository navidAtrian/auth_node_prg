const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const {isLogged} = require('../middlewares/auth')

router.use('/auth',authRouter);
router.use('/user',isLogged,userRouter);


module.exports = router