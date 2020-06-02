const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');


//describe
mocha.describe('Testing mocha deleting', () => {

    beforeEach( done => {
        const lilSkies = new userModel({
            name: 'lil skies',
            age: 22,
            weight: 63,
            context: 'Inside delete test'
        });

        lilSkies.save().then(() => {
            // assert( lilSkies.isNew === false);
            done();
        });
    });

    //test 1
    it('Deleting lilSkies from DB', done => {
            userModel.findOneAndRemove({name: 'lil skies'}).then( () => {
                userModel.findOne({name: 'lil skies'}).then( result => {
                    assert(result === null);
                    done();
                });
            });
    });
});