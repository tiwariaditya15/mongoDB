const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {

    
    before(done => {
        const aditya = new userModel({
            name: 'aditya',
            weight: 66,
            age: 21,
            context: 'Inside finding test'
        });

        aditya.save().then( () => {
            done();
        });
    });

    //tests
    it('Finding Records in database.', (done) => {
            userModel.find({name: 'aditya'}, result => {
                //assert(result === null);
                console.log(result);
                done();
            });
            
    });
});