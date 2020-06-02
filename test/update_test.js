const mocha = require('mocha');
const userModel = require('../models/userModel');
const assert = require('assert');


mocha.describe('Updating Records', () => {


    beforeEach( done => {
        const dawg = new userModel({
            name: 'dawg',
            age: 2,
            weight: 15,
            conext: 'Inside Update.'
        });

        dawg.save().then( () => {
            assert(dawg.isNew === false);
            done();
        });
    });

    //test 1
    it('Updating document with name dawg', done => {
            userModel.findOneAndUpdate({name: 'dawg'}, {name: 'dawg updated'}).then( () => {
                        userModel.findOne({name: 'dawag'}).then( (result) => {
                                assert(result === null);
                                done();
                        });
            });
    });
});