const expect  = require('chai').expect;
const request = require('request');

describe('Status and content', function() {
    it('Main page status', function() {
        request('http://localhost:8080' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });

    it('About page content', function() {
        request('http://localhost:8080/about' , function(error, response, body) {
            expect(response.statusCode).to.equal(404);
        });
    });
});

describe('Returned values', function() {
    it('Convert 1', function(){
        request.post('http://localhost:8080/convert', {form:{number:'1'}}, function(error, response, body) {
            expect(response.body.cnvrtd_number).to.equal("I");
        });
    });
    it('Not convert 1', function(){
        request.post('http://localhost:8080/convert', {form:{number:'5'}}, function(error, response, body) {
            expect(response.body.cnvrtd_number).to.not.equal("I");
        });
    });
    it('Convert 5', function(){
        request.post('http://localhost:8080/convert', {form:{number:'5'}}, function(error, response, body) {
            expect(response.body.cnvrtd_number).to.equal("V");
        });
    });
    it('Not convert 5', function(){
        request.post('http://localhost:8080/convert', {form:{number:'1'}}, function(error, response, body) {
            expect(response.body.cnvrtd_number).to.not.equal("V");
        });
    });
});