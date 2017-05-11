var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {

    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("TRUNCATE produtos", function(ex, result){
            if (!ex) {
                done();
            }
        });
    });

    it('#listagem json', function(done) {
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done);
    });   

    it('cadastro de produtos com dados inválidos', function(done) {
        request.post('/produtos')
        .send({titulo:"", preco:5.90, descricao:"Novo Livro"})
        .expect(400, done);
    });  

    it('cadastro de produtos com dados válidos', function(done) {
        request.post('/produtos')
        .send({titulo:"Novo Livro", preco:5.90, descricao:"Novo Livro"})
        .expect(302, done);
    });  
});