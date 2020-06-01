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
            assert(aditya.isNew === false);
            done();
        });
    });

    //tests
    it('Finding Records in database.', (done) => {
        // this.timeout(10000);
        // setTimeout(done, 10000);
            userModel.findOne({name: 'aditya'}).then( (result) => {
                assert(result.name === 'aditya');
                done();
            });
            
    });
});