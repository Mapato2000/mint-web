const User = require('../models/user');



exports.getUserbyMail = async function (auth) {
    return User.findOne({email: auth.toLowerCase()});
};
exports.saveUser = async function (params) {
    const user = await User.findOne({_id: params.id});
    return await exports.updateUser(user, params);
};

exports.updateUser = async function (user, params) {
    user.name = params.name;
    user.surname = params.surname;
    user.phone = params.phone;
    user.address = params.address;
    user.nif = params.nif
    user = await user.save();
    return user;
};