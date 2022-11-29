/**
 * Api Controller
 */

exports.methodNotFound = function (_req, res) {
    return res.json({msg: "Method not found"});
};

exports.sayHello = function (_req, res) {
    return res.status(200).json({message: "Hello"});
};

exports.sayHelloAuth = function (_req, res) {
    return res.status(200).json({message: "Hello Auth"});
};

exports.sayHelloAdmin = function (_req, res) {
    return res.status(200).json({message: "Hello Admin"});
};

exports.checkAuth = function (req, res) {
    return res.status(200).json({user: req.user});
};
