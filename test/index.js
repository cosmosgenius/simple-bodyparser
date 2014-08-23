/*jslint node: true */
/*jshint expr: true*/
/*global describe, it, before*/
'use strict';

var bodyparser = require('../'),
    request = require('supertest'),
    http = require('http'),
    should = require('should');

var server;

function createServer(){
    var _parser = bodyparser();
    return http.createServer(function(req, res){
        _parser(req, res, function(err){
            if (err) {
                res.statusCode = 500;
                res.end(err.message);
                return;
            }
            res.end(req.body);
        });
    });
}

describe('bodyparser', function() {
    before(function(){
        server = createServer();
    });

    it('should exist', function() {
        should.exist(bodyparser);
    });

    it('should return a function', function() {
        bodyparser().should.be.a.Function;
    });

    it('should return a data', function(done) {
        var testDtr = 'hello this is a test';
    
        request(server)
            .post('/')
            .send(testDtr)
            .expect(200,testDtr,done);
    });
});

