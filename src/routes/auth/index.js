const express = require('express');
const router = express.Router();
const validator = require('./validator')



const controller = require('./controller')

router.post(
    '/register',
    validator.registerValidator(),
    controller.validate.bind(controller),
    controller.register.bind(controller)
)

router.post(
    '/login',
    validator.loginValidator(),
    controller.validate.bind(controller),
    controller.login.bind(controller)
)

module.exports = router