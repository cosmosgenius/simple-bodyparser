/*jslint node: true */
/*jshint expr: true*/
/*global describe, it, before*/
'use strict';

var rawbody = require('../'),
    should = require('should');

describe('rawbody', function() {
    it('should exist', function() {
        should.exist(rawbody);
    });

    it('should return a function', function() {
        rawbody().should.be.a.Function;
    });
});