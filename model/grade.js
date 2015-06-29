function Grade(x, y) {
	var self = this;
	var _itensDaGrade = [];

	self.adicionar = function(navio, posicao) {
		_itensDaGrade.push({
			navio: navio,
			x: posicao.x,
			y: posicao.y
		});
	};

	self.receberJogada = function(x, y) {
		var itemDaGrade  = _itensDaGrade.filter(function(itemDaGrade) {
			return itemDaGrade.x === x && itemDaGrade.y === y;
		})[0];

		if (itemDaGrade !== undefined) {
			itemDaGrade.navio.explodir();
			return true;
		}

		return false;
	};

	self.qualEhAPosicaoDo = function(navioProcurado){
		var navioEncontrado = _itensDaGrade.filter(function(itemDaGrade) {
			return itemDaGrade.navio == navioProcurado;
		})[0];

		return { x: navioEncontrado.x, y: navioEncontrado.y };
	};
}

module.exports = Grade;