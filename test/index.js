/*jslint node: true */
/*jshint expr: true*/
/*global describe, it, before*/
'use strict';

var rawbody = require('../'),
    request = require('supertest'),
    app = require('express')(),
    should = require('should');


describe('rawbody', function() {
    before(function(){
        request = request(app);
    });

    it('should exist', function() {
        should.exist(rawbody);
    });

    it('should return a function', function() {
        rawbody().should.be.a.Function;
    });

    it('should return a data', function(done) {
        var testDtr = 'hello this is a test';
        app.use(rawbody());

        app.post('/',function(req) {
            req.rawBody.should.eql(testDtr);
            done();
        });

        request
            .post('/')
            .send(testDtr)
            .expect(200)
            .end();
    });
});