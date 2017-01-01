const request = require('supertest');
const http = require('http');

const bodyparser = require('./');

function createServer(){
    const _parser = bodyparser();
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
    it('should exist', function() {
        expect(bodyparser).toBeDefined();
    });

    it('should return a function', function() {
        expect(bodyparser()).toBeInstanceOf(Function);
    });

    it('should return a data', function(done) {
        const testDtr = 'hello this is a test';
        const server = createServer();

        request(server)
            .post('/')
            .send(testDtr)
            .expect(200,testDtr,done);
    });
});

