//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


var zucchine = [
	{	'varietà'  : 'tipo A',
		'peso'     : 12,
		'lunghezza': 11
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 12,
		'lunghezza': 12
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 12,
		'lunghezza': 16
	},
	{	'varietà'  : 'tipo A',
		'peso'     : 12,
		'lunghezza': 18
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 12,
		'lunghezza': 10
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 12,
		'lunghezza': 22
	},
	{	'varietà'  : 'tipo JH',
		'peso'     : 12,
		'lunghezza': 34
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 12,
		'lunghezza': 12
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 12,
		'lunghezza': 22
	},
	{	'varietà'  : 'tipo A',
		'peso'     : 12,
		'lunghezza': 11
	}
];


// * JS SNACK 1 *
// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var sum = 0;
for (var i=0; i<zucchine.length; i++) {
	sum += zucchine[i].peso;
}

$('.table1').append('<tr><td>Peso totale zucchine</td><td class="hl2">'+sum+'</td></tr>');


// * JS SNACK 2 *
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm (:smirk:).
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

var zucchineSeparate = {
	'piccole': [],
	'grandi' : [],
}

for (var i=0; i<zucchine.length; i++) {
	if (zucchine[i].lunghezza < 15) {
		zucchineSeparate.piccole.push(zucchine[i]);
	} else {
		zucchineSeparate.grandi.push(zucchine[i]);
	}
}
console.log(zucchineSeparate);

var pesoZucchineSeparate = {
	'piccole' : 0,
	'grandi' : 0
}
for (key in zucchineSeparate) {
	for (var i=0; i<zucchineSeparate[key].length; i++) {
		pesoZucchineSeparate[key] += zucchineSeparate[key][i].peso;
	}
}
console.log(pesoZucchineSeparate);

for (key in pesoZucchineSeparate) {
	$('.table2').append('<tr><td>Peso zucchine '+key+'</td><td class="hl2">'+pesoZucchineSeparate[key]+'</td></tr>');
}


// * JS SNACK 3 *
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function stringReverse(_string) {
	// faccio cose
}






// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


