//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


// * ---------- * JS SNACK 1 * ---------- *
// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
	{	'varietà'  : 'tipo A',
		'peso'     : 13,
		'lunghezza': 11
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 14,
		'lunghezza': 12
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 18,
		'lunghezza': 16
	},
	{	'varietà'  : 'tipo A',
		'peso'     : 20,
		'lunghezza': 18
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 12,
		'lunghezza': 10
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 24,
		'lunghezza': 22
	},
	{	'varietà'  : 'tipo J.H.',
		'peso'     : 36,
		'lunghezza': 34
	},
	{	'varietà'  : 'tipo B',
		'peso'     : 14,
		'lunghezza': 12
	},
	{	'varietà'  : 'tipo C',
		'peso'     : 24,
		'lunghezza': 22
	},
	{	'varietà'  : 'tipo A',
		'peso'     : 13,
		'lunghezza': 11
	}
];

$('.table1').append('<tr class="hl1"><td></td><td>varietà</td><td>peso</td><td>lunghezza</td></tr>');

var sum = 0;
for (var i=0; i<zucchine.length; i++) {
	sum += zucchine[i].peso;
	$('.table1').append('<tr>'+
							'<td class="hl1">zucchina #'+(i+1)+'</td>'+
							'<td>'+zucchine[i].varietà+'</td>'+
							'<td class="hl2">'+zucchine[i].peso+'</td>'+
							'<td>'+zucchine[i].lunghezza+'</td>'+
						'</tr>');
}

$('.end_table1').append('<span class="hl3">Peso totale zucchine:</span> <span class="hl2">'+sum+'</span>');


// * ---------- * JS SNACK 2 * ---------- *
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm (:smirk:).
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

var zucchineSeparate = { // oggetto di array di oggetti: e che ci vuole?! :D
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

var pesoZucchineSeparate = {
	'piccole' : 0,
	'grandi' : 0
}
for (key in zucchineSeparate) {
	for (var i=0; i<zucchineSeparate[key].length; i++) {
		pesoZucchineSeparate[key] += zucchineSeparate[key][i].peso;
	}
}

$('.table2').append('<tr class="hl1"><td></td><td>varietà</td><td>peso</td><td>lunghezza</td><tr>');

for (key in zucchineSeparate) {
	for (var i=0; i<zucchineSeparate[key].length; i++) {
		$('.table2').append('<tr>'+
								'<td class="hl1">zucchine '+key+' #'+(i+1)+'</td>'+
								'<td>'+zucchineSeparate[key][i].varietà+'</td>'+
								'<td class="hl2">'+zucchineSeparate[key][i].peso+'</td>'+
								'<td>'+zucchineSeparate[key][i].lunghezza+'</td>'+
							'<tr>');
	}
	$('.table2').append('<tr><td colspan="2" class="hl3">Peso totale zucchine '+key+':</td><td class="hl2">'+pesoZucchineSeparate[key]+'</td><td></td><tr>');
}


// * ---------- * JS SNACK 3 * ---------- *
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

$('.msg_box').hide();
$(document).on('click', '#usr_in_btn', getResponseByInputForm);
$(document).on('click', '#usr_erase_btn', emptyForm);


// * ---------- * JS SNACK 4 * ---------- *


// * ---------- * JS SNACK 5 * ---------- *


// * ---------- * JS SNACK 6 * ---------- *


// * ---------- * JS SNACK 7 * ---------- *


// * ---------- * JS SNACK 8 * ---------- *




// * ------- * JS SNACK LABELS * -------- *
showJsSnackLabels();


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


// * ---------- * JS SNACK 1 * ---------- *
// no functions


// * ---------- * JS SNACK 2 * ---------- *
// no functions


// * ---------- * JS SNACK 3 * ---------- *
function stringReverse(_string) {
	var rev = '';
	for (var i=0; i<_string.length; i++) 
		rev += _string[_string.length - i - 1];
	return rev;
}
function getResponseByInputForm() {
	var string = $('#usr_str').val(), msg = '';
	if (string == '') {
		msg = 'Inserisci una stringa!';
	} else {
		var revString = stringReverse(string);		
		msg = '<div>La stringa al contrario è</div><span class="hl2">'+revString+'</span>';
	}
	showMsg(msg);
}
function showMsg(_msg) {
	$('.msg').html(_msg);
	$('.msg_box').fadeIn(300, function() {
		setTimeout(function() {
			$('.msg_box').fadeOut(300);
		},2000);
	});
	emptyForm();
}
function emptyForm() {
	$('#usr_str').val('');
}


// * ---------- * JS SNACK 4 * ---------- *
// no functions


// * ---------- * JS SNACK 5 * ---------- *
// no functions


// * ---------- * JS SNACK 6 * ---------- *
// no functions


// * ---------- * JS SNACK 7 * ---------- *
// no functions


// * ---------- * JS SNACK 8 * ---------- *
// no functions


// * ------- * JS SNACK LABELS * -------- *
function showJsSnackLabels() {
	$('.card').append('<div class="label"></div>');
	$('.label').each(function(n) {
		$(this).html('Js Snack '+(n+1));
	});	
}
