var should = require('chai').should();
var Navio = require('../../model/navio');

describe('Navio', function(){
	it('deve incrementar as vezes que ele foi atingido', function(){
		var navio = new Navio();

		navio.atingir();

		navio.vezesAtingido.should.equal(1);
	});

	it('destruir o navio quando for atingido o mesmo número de vidas', function(){
		var vidas = 1;
		var navio = new Navio(vidas);

		navio.atingir();

		navio.obterEstado().should.equal('destruido'); 
	});

	it('não destruir o navio quando for atingido menos vezes que o número de vidas', function(){
		var vidas = 2;
		var navio = new Navio(vidas);

		navio.atingir();

		navio.obterEstado().should.equal('inteiro'); 
	});

	it('não permitir o navio ser atingido mais vezes que o número de vidas', function(){
		var vidas = 1;
		var navio = new Navio(vidas);

		navio.atingir();
		navio.atingir();

		navio.vezesAtingido.should.equal(vidas); 
	});
});