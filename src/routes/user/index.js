const express = require('express');
const router = express.Router();

const controller = require('./controller')

router.get(
    '/',
    controller.home.bind(controller)
)

router.get(
    '/profile',
    controller.profile.bind(controller)
)

module.exports = router