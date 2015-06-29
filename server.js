var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Grade = require('./model/grade');
var Navio = require('./model/navio');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var porta = process.env.PORT || 4848;

var router = express.Router();

var grade = new Grade();
var navio = new Navio();

grade.adicionar(navio, {
	x: 3,
	y: 4
});

router.post('/jogar', function(req, res) {
	var x = parseInt(req.body.x);
	var y = parseInt(req.body.y);

	res.json(grade.receberJogada(x, y));
});

app.use('/api', router);

app.listen(porta);

console.log('API de Batalha Naval foi iniciada na porta ' + porta);