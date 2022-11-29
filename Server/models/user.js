const mongoose = require('mongoose');
const Constants = require("../config/constants");


// define the schema for our user model
const Schema = mongoose.Schema(
    {
        email : String,
        name: String,
        surname: String,
        nif : String,
        phone: Number,
        address: String,
        country: String,
        password: String,
        role:Number,
        collectionsAddress : [String],
        titolsAddress : [String]
    }
);


// create the model for users and expose it to our app
module.exports = mongoose.model('User', Schema);

