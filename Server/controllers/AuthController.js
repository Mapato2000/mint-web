const bcrypt = require('bcryptjs');
const UserCore = require("../core/UserCore");
const secret = "hqwpcinaknuvajf";
const jwt = require('jsonwebtoken');
const User = require('../models/user');
exports.checkPassword = function (password, user_password) {
    return bcrypt.compareSync(password, user_password);
};

exports.encryptPassword = function (password) {
    return bcrypt.hashSync(password, 10);
};

exports.login = async function (req, res) {
    try {
        const auth = req.body.email.toUpperCase();
        const password = req.body.password;
        if (!auth || !password) {
            return res.status(401).json({error:'Missing fields'});
        }
        const user = await UserCore.getUserbyMail(auth);
        if (!user || user.length === 0) {
            return res.status(401).json({errorCode: 'User not found'});
        }
        if (!exports.checkPassword(req.body.password, user.password)) {
            return res.status(401).json({errorCode: 'Wrong password'});
        }  else {
            return res.json({token: jwt.sign({_id: user._id}, secret), userCif: auth, userId: user._id.toString()});
        }
    } catch (e) {
        return res.status(500).json({errorCode: 'Generic error'});
    }
};

exports.authenticate = function (req, _res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === "Bearer") {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                req.user = null;
                next();
            } else {
                User.findOne({_id: decoded._id}, (errUser, user) => {
                    if (errUser) req.user = null;
                    req.user = user;
                    next();
                });
            }
        });
    } else {
        req.user = null;
        next();
    }
};

exports.isLoggedIn = function (req, res, next) {
    if (req.user != null) {
        next();
    } else {
        return res.status(400).send({error: 'Unauthorized user!' });
    }
};

exports.register = async function (req,res){
    const params = req.body;

    if (!params.email || !params.password ){
        return res.status(400).send({error:'Missing fields'});
    }
    if (params.password !== params.verifypassword){
        return res.status(400).send({error:'passwords don\'t match'});
    }
    try {
        let user = await UserCore.getUserbyMail(params.email.toLowerCase());
        if (!user){
            user = new User();
            user.email= params.email;
            user.password = exports.encryptPassword(params.password);
            user.role = params.role;
            await user.save();
            return res.status(200).json({user: user, token: jwt.sign({_id: user._id}, secret)});
        }else{
            return res.status(400).send({error:'this user already exists'});
        }
    }
    catch (e) {
        return res.status(400).send({error:'generic error'});
    }

}

exports.isRole = function (_role) {
    return true;
};

exports.apiWorking = function (_req, res) {
    return res.status(200).json({message: 'API Working!'});
};

