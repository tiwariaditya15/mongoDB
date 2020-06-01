const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {

    //tests
    it('Record saved succesfully', done => {
        const aditya = new userModel({
            name: 'aditya',
            weight: 66,
            age: 21,
            context: 'Inside saving test.'
        });

        aditya.save().then( () => {
            assert(aditya.isNew === false);
            done();
        }).catch(done);
    });
});