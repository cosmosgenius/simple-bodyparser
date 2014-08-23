/*jslint node: true */
/*jshint expr: true*/
/*global describe, it, before*/
'use strict';

var bodyparser = require('../'),
    request = require('supertest'),
    app = require('express')(),
    should = require('should');


describe('bodyparser', function() {
    before(function(){
        request = request(app);
    });

    it('should exist', function() {
        should.exist(bodyparser);
    });

    it('should return a function', function() {
        bodyparser().should.be.a.Function;
    });

    it('should return a data', function(done) {
        var testDtr = 'hello this is a test';
        app.use(bodyparser());

        app.post('/',function(req) {
            req.body.should.eql(testDtr);
            done();
        });

        request
            .post('/')
            .send(testDtr)
            .expect(200)
            .end();
    });
});