const express = require('express');

const ApiController = require('../controllers/ApiController');
const AuthController = require('../controllers/AuthController');

module.exports = function (app) {
    const api = express.Router();

    // Login Register //
    api.post('/login', AuthController.login);
    api.post('/register',AuthController.register);

    // Public Zone //
    api.get('/', AuthController.apiWorking);

    // Auth Zone //
    api.all('*', AuthController.authenticate, AuthController.isLoggedIn);
    api.get('/auth', ApiController.checkAuth);

    // Admin Zone //
    // api.all('*', AuthController.isRole(User.ROLE_ADMIN));
    // api.get('/admin', ApiController.sayHelloAdmin);

    // Error fallback //
    api.get('*', ApiController.methodNotFound);

    // Use router
    app.use('/api', api);
};
