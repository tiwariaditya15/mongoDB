const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {

    
    before(done => {
        const jack = new userModel({
            name: 'jack',
            weight: 66,
            age: 21,
            context: 'Inside finding test'
        });

        jack.save().then( () => {
            assert(jack.isNew === false);
            done();
        });
    });

    //tests
    it('Finding Records in database.', (done) => {
        // this.timeout(10000);
        // setTimeout(done, 10000);
            userModel.findOne({name: 'jack'}).then( (result) => {
                assert(result.name === 'jack');
                done();
            });
            
    });
});