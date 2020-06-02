const mocha = require('mocha');
const userModel = require('../models/userModel');
const assert = require('assert');


mocha.describe('Updating Records', () => {

    let dawg;
    beforeEach( done => {
         dawg = new userModel({
            name: 'dawg',
            age: 2,
            weight: 15,
            conext: 'Inside Update.'
        });

        dawg.save().then( () => {
           
            done();
        });
    });

    //test 1
    it('Updating document with name dawg', done => {
            userModel.findOneAndUpdate({_id: dawg._id}, {name: 'dawg updated'}).then( () => {
                        userModel.findOne({_id: dawg._id}).then( (result) => {
                                assert(result.name === 'dawg updated');
                                done();
                        });
            });
    });
});