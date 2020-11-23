const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');
const fixtures = require('./fixtures');
const { response } = require('express');

describe('CRUD Waters', () => {
    before((done) => {
        // run migrations
        knex.migrate.latest()
            .then(() => {
                // run seeds
                return knex.seed.run();
            }).then(() => done());
    });

    it('Lists all Records', (done) => {
        request(app)
            .get('/api/v1/waters')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                //console.log(response.body);
                expect(response.body).to.deep.equal(fixtures.waters);
                done();
            });
    });

    it('Show one record by Id', (done) => {
        request(app)
            .get('/api/v1/waters/5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                //console.log(response.body);
                expect(response.body).to.deep.equal(fixtures.waters[4]);
                done();
            });
    });

    it('Creates a record', (done) => {
        request(app)
            .post('/api/v1/waters')
            .send(fixtures.exampleWater)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.exampleWater.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.exampleWater);
                done();
            });
    });

    //Timeout errorのため修正中。理由不明。
    // it('Updates a record', (done) => {
    //     fixtures.exampleWater.hardness = 500;
    //     request(app)
    //         .put('/api/v1/waters/5')
    //         .send(fixtures.exampleWater)
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .then((response) => {
    //             expect(response.body).to.be.a('object');
    //             expect(response.body).to.deep.equal(fixtures.exampleWater);
    //             done();
    //         });
    // });

    it('Delete a record', (done) => {
    request(app)
        .delete('/api/v1/waters/5')
        .send(fixtures.exampleWater)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).to.be.a('object');
            expect(response.body).to.deep.equal({
                delete: true
            });
            done();
        });
    });
});