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
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

// name/surname lists
var nameList    = ['Marco',   'Kasia',   'Elio',   'Cristina', 'Antonio', 'Pierfrancesco'  ];
var surnameList = ['Giallini','Smutniak','Germano','Capotondi','Albanese','Favino',           'Gassman','Golino','Morante'];

// showing lists
showList('nomi',nameList,'table4a');
showList('cognomi',surnameList,'table4b');

// fake ids elements
const fakeIdNumber   = 3;
var   fakeIds        = []; // array of fake-id-objects
var   tmpNameList    = []; // picked up name list
var   tmpSurnameList = []; // picked up surname list
var   i=1; // fake id counter in [1, ..., fakeIdNumber]

$('.table4c').append('<tr class="hl1"><td></td><td>nome</td><td>cognome</td></tr>');

while (fakeIds.length < fakeIdNumber) {

	var newId      = {}; // this new fake id 
	var tmpName    = nameList[getRandomInt(0,nameList.length-1)];
	var tmpSurname = surnameList[getRandomInt(0,surnameList.length-1)];
	
	// only considering different couples names/surnames
	if (!tmpNameList.includes(tmpName) && !tmpSurnameList.includes(tmpSurname)) {

		// picked up name/surname memory
		tmpNameList.push(tmpName);
		tmpSurnameList.push(tmpSurname);

		// building this new fake id
		newId.name    = tmpName;
		newId.surname = tmpSurname;
		fakeIds.push(newId);

		// building fake id table
		$('.table4c').append('<tr><td class="hl1">identità #'+i+'</td><td class="hl2">'+newId.name+'</td><td class="hl2">'+newId.surname+'</td></tr>');
		i++;

	}

}



// * ---------- * JS SNACK 5 * ---------- *
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

const numListRange  = 1000; // numbers in [1, ..., numListRange]
var   numListLength = getRandomInt(10,20);
var   intNumList    = [];
var   oddSum        = 0;

$('.table5').append('<tr class="hl1"><td></td><td>valore</td></tr>');

for (var i=0; i<numListLength; i++) {

	// random numbers
	var n = getRandomInt(1,numListRange);
	
	// collection
	intNumList.push(n);
	
	// odd position case
	var td_class = '';
	if ((i+1) % 2 != 0) { 
		oddSum += n; 
		td_class = ' class="hl2"';
	}

	// building table
	$('.table5').append('<tr><td class="hl1">numero #'+(i+1)+'</td><td'+td_class+'>'+intNumList[i]+'</td></tr>');

}

// showing sum
$('.end_table5').html('<span class="hl3">Somma:</span> <span class="hl2">'+oddSum+'</span>');




// * ---------- * JS SNACK 6 * ---------- *
// 3)
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.



// * ---------- * JS SNACK 7 * ---------- *
// 4)
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].



// * ---------- * JS SNACK 8 * ---------- *
// 5)
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”




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
function getRandomInt(_a, _b) {
	return Math.floor(Math.random()*(_b-_a+1))+_a;
}
function showList(_id,_list,_domHook) {
	$('.'+_domHook).html('<tr class="hl1"><td></td><td>'+_id+'</td></tr>');
	for (var i=0; i<_list.length; i++) {
		$('.'+_domHook).append('<tr><td class="hl1">#'+(i+1)+'</td><td>'+_list[i]+'</td></tr>');
	}
}


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
		$(this).html('<span>Js Snack '+(n+1)+'</span>');
	});	
}
