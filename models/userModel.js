const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//we gotta create schema and model
//schema to declare sturcture of collection
// models to insert data in needed collection using particular schema

//schema
const userSchema = new Schema({
    name: String,
    age: Number,
    weight: Number,
    context: String
});

//model

const userModel = mongoose.model('userlist', userSchema);

module.exports = userModel;