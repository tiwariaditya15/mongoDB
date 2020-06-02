const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {

    //tests 1
    it('Jack saved succesfully', done => {
        const jack = new userModel({
            name: 'jack harlow',
            weight: 66,
            age: 21,
            context: 'Inside saving test.'
        });

        jack.save().then( () => {
            assert(jack.isNew === false);
            done();
        }).catch(done);
    });

    //tests 2
    it('Travis saved succesfully', done => {
        const travis = new userModel({
            name: 'travis scott',
            weight: 60,
            age: 30,
            context: 'Inside saving test.'
        });

        travis.save().then( () => {
            assert(travis.isNew === false);
            done();
        }).catch(done);
    });
});