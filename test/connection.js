const mongoose = require('mongoose'); 

//ES6 Promises
mongoose.Promise = global.Promise;

before( done => {
    //connecting to mongoDB
    mongoose.connect('mongodb://localhost/testuser', { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
        console.log('Mongoose connected to db. Start developing your thing.');
        done();
    }).on('error', error  => {
        console.log('Error is :' + error);
    });
});

// beforeEach( done => {
//     mongoose.connection.dropCollection('authors', (error, result) => {
//         // console.log(result);
//         done();
//     });
// });

beforeEach( done => {
    mongoose.connection.dropCollection('userlists', (error, result) => {
        // console.log(result);
        done();
    });
});