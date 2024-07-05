const { validationResult } = require('express-validator')
const User = require('../models/user')

module.exports = class {
    constructor() {
        this.User = User
    }

    validationBody(req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            const errors = result.array();
            const messages = []
            errors.forEach(item => {
                messages.push(item.msg)
            })
            res.status(400).json({
                message: 'Validation error',
                data: messages
            })
            return false
        }
        return true
    }

    validate(req, res, next) {
        if (!this.validationBody(req, res)) {
            return
        }
        next()
    }


    response({ res, message, code = 200, data = {} }) {
        res.status(code).json({
            message,
            data
        })
    }
}