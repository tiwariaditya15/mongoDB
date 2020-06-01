const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {

    //tests
    it('Record saved succesfully', done => {
        const jack = new userModel({
            name: 'jack',
            weight: 66,
            age: 21,
            context: 'Inside saving test.'
        });

        jack.save().then( () => {
            assert(jack.isNew === false);
            done();
        }).catch(done);
    });
});