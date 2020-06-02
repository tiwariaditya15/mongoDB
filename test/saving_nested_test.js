const mocha = require('mocha');
const assert = require('assert');
const AuthorModel = require('../models/authorModel');
mocha.describe('Saving Nested Schema', () => {

    //test 1 to add author
    it('Saving Travis', done => {
        const travis = new AuthorModel({
            name: 'travis',
            age: 30,
            songs: [{ title: 'highest in room', length: '3'}]
        });

        travis.save().then( () => {
            AuthorModel.findOne({name: 'travis'}).then( result => {
                assert(result.songs.length === 1);
                done();
            });
        });
    });


    // test 2 to add new books to author
    it('Adding new song to author', done => {
        const travis = new AuthorModel({
            name: 'travis scott',
            age: 30,
            songs: [{ title: 'the scotts', length: '3'}]
        });

        travis.save().then( () => {
            AuthorModel.findOne({ name: 'travis scott' }).then( result => {
                    result.songs.push({title: 'Butterfly Effect', length: '4'});
                    result.save().then( () => {
                        AuthorModel.findOne({ name: 'travis scott'}).then( result => {
                            assert(result.songs.length === 2);
                            done();
                        });
                    });
            });;
        });
    });
});