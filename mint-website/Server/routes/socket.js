const EasySockets = require('easy-sockets');
const SocketController = require('../controllers/SocketController');

EasySockets.onConnection({manageUsers: true},  (socket) => {

    // Auth Signals
    socket.on('*', EasySockets.middleware.onlyLoggedIn);

    // Send Message
    socket.on('EXAMPLE', SocketController.example);

});
