const request = require('supertest');
const expect = require('expect');
const { app } = require('../../app');

describe('GET /', () => {
    it('should return a list of books', done => {
        request(app)
        .get('/')
        .expect(200)
        .expect(res => {
            expect(res.body).toBeA('array');
            expect(res.body.length).toBe(5);
        })
        .end(done);
    });
});