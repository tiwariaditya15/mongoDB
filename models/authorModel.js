const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SongSchema = new Schema({
    title: String,
    length: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    songs: [SongSchema]
});


const AuthorModel = mongoose.model('authors', AuthorSchema);


module.exports = AuthorModel;