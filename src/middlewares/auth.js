const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

async function isLogged(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) res.status(401).send('Accsess denied.');
    try{
        const decoded = await jwt.verify(token, config.get('jwt_key'))
        const user = await User.findById(decoded._id)
        console.log('USER::',user);
        req.user = user;
        next();
    }
    catch(err){
        res.status(400).send('Invalid token.');
    };
}

module.exports = {isLogged};