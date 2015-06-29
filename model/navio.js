function Navio(tamanho, x, y) {
	var self = this;
	var _estado = 'inteiro';
	var _x = x;
	var _y = y;
	var _vidas = tamanho;

	self.vezesAtingido = 0;

	self.foiDestruido = function() {
		return _estado === 'destruido';
	};

	self.estaNaPosicao = function(x, y) {
		return _x === x && _y === y;
	};

	self.explodir = function() {
		_estado = 'destruido';
	};

	self.atingir = function() {
		if (_estado === 'destruido')
			return;
		
		self.vezesAtingido++;

		if (self.vezesAtingido === _vidas)
			_estado = 'destruido';
	}

	self.obterEstado = function() {
		return _estado;
	}
}

module.exports = Navio;