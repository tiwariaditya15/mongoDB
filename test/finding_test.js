const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/userModel');

mocha.describe('Testing mocha', () => {
    let travis;
    
    beforeEach(done => {
        // const jack = new userModel({
        //     name: 'jack harlow',
        //     weight: 66,
        //     age: 21,
        //     context: 'Inside finding test'
        // });

        // jack.save().then( () => {
        //     assert(jack.isNew === false); // this line can be removed
        //     done();
        // }).catch(done);

         travis = new userModel({
            name: 'travis scott',
            weight: 60,
            age: 30,
            context: 'Inside finding test'
        });

        travis.save().then( () => {
            assert(travis.isNew === false); // this line can be removed
            done();
        }).catch(done);
    });

    // //tests 1
    // it('Finding Jack Harlow', (done) => {
    //     // this.timeout(10000);
    //     // setTimeout(done, 10000);
    //         userModel.findOne({name: 'jack harlow'}).then( (result) => {
    //             assert(result.name === 'jack harlow');
    //             done();
    //         }).catch(done);
            
    // });


    //test 2
    it('Finding Travis Scott by name', done => {
        userModel.findOne({name: 'travis scott'}).then( result => {
            assert(result.name === 'travis scott');
            done();
        }).catch(done);
    });


    //test 3
    it('Finding Travis Scott by ID', done => {
        userModel.findOne({_id: travis._id}).then( result => {
            assert(result._id.toString() === travis._id.toString());
            done();
        }).catch(done);
    });
});