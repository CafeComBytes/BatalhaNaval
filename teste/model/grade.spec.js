var should = require('chai').should();
var Navio = require('../../model/navio');
var Grade = require('../../model/grade');

describe('Grade', function() {
	it('deve marcar o acerto do navio', function() {
		var navio = new Navio();
		var grade = new Grade();
		var posicao = { x: 3, y: 4 }
 		grade.adicionar(navio, posicao);

		grade.receberJogada(3, 4);

		navio.foiDestruido().should.equal(true);
	});

	it('deve adicionar o navio em uma posicao', function(){
		var grade = new Grade();
		var navio = new Navio();
		var posicao = { x: 1, y: 1 };

		grade.adicionar(navio, posicao);

		grade.qualEhAPosicaoDo(navio).should.deep.equal(posicao);
	});

	it('deve informar se algo foi atingido', function() {
		var navio = new Navio();
		var grade = new Grade();
		var posicao = { x: 3, y: 4 }
 		grade.adicionar(navio, posicao);

		grade.receberJogada(3, 4).should.equal(true);
	});

	it('deve informar se algo não foi atingido', function() {
		var navio = new Navio();
		var grade = new Grade();
		var posicao = { x: 3, y: 4 }
 		grade.adicionar(navio, posicao);

		grade.receberJogada(3, 5).should.equal(false);
	});
});