/**
 * Node.js Login Boilerplate
 * More Info : http://kitchen.braitsch.io/building-a-login-system-in-node-js-and-mongodb/
 * Copyright (c) 2013-2016 Stephen Braitsch
 **/

// Read params
let prevArg = "";
process.socket = false;
for (const arg of process.argv) {
    if (prevArg === "cron") {
        process.cron = arg;
    }
    if (arg === "--socket") {
        process.socket = true;
    }
    if (prevArg === "--network") {
        process.network = arg;
    }
    if (prevArg === "--port") {
        process.port = parseInt(arg);
    }
    prevArg = arg;
}

// Read config
const config = require('./config/config.js');

// Set up database connection
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.database.url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err.message);
    });

// Check if we run a cron or a server
if (process.cron) {
    module.exports = require('./cron')(config);
} else {
    module.exports = require('./server')(config);
}
