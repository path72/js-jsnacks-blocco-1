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
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// empty couple of arrays
var arrayList = {
	'A': [],
	'B': []
}

// filling arrays (1-10 random numbers in range 1-1000)
const elementsNumber = 10,
	  elementRange   = 1000;
for (key in arrayList) {
	for (var i=0; i<getRandomInt(1,elementsNumber); i++) {
		arrayList[key].push(getRandomInt(1,elementRange));
	}
}

// shorter array
var shorterArrKey = findShorterArrayInAListObj(arrayList,true); // array of key of shorter arrays
// longer array
var longerArrKey = findShorterArrayInAListObj(arrayList,false); // array of key of longer arrays

// show arrays
if (longerArrKey[0] != shorterArrKey[0]) {
	showArray(longerArrKey[0],arrayList[longerArrKey[0]],'table6a',undefined);
	showArray(shorterArrKey[0],arrayList[shorterArrKey[0]],'table6b',undefined);
} else {
	showArray('A',arrayList.A,'table6a',undefined);
	showArray('B',arrayList.B,'table6b',undefined);
}

// length difference
var deltaLenght = arrayList[longerArrKey[0]].length - arrayList[shorterArrKey[0]].length;

// results
if (deltaLenght > 0) {
	$('.end_table6').html('<span class="hl3">Differenza iniziale: '+deltaLenght+' element'+((deltaLenght==1)?'o':'i')+' &rArr; array '+shorterArrKey[0]+' riempito!</span>');
	for (var i=0; i<deltaLenght; i++) {
		// filling shorter array
		arrayList[shorterArrKey[0]].push(getRandomInt(1,1000));
	}
	// showing filled array
	showArray(shorterArrKey[0],arrayList[shorterArrKey[0]],'table6c',deltaLenght);
} else {
	// no contest
	$('.end_table6').html('<span class="hl3">Array di lunghezza uguale! (Ricarica la pagina)</span>');
}



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
// function getRandomInt(_a, _b) {... }



// * ---------- * JS SNACK 6 * ---------- *
function findShorterArrayInAListObj(_arrayListObj,_shorter) {
	/**
	 * returns array of shorter/logner arrays (if more than one) in a list-object of arrays
	 * _shorter:true  => shorter arrays
	 * _shorter:false => longer arrays
	 */
	var keyListOK = []; // list of shorter/longer arrays
	for (key in _arrayListObj) { // consideirng key...
		var keyOK = true; // key is the shorter/longer (optimistic start!)
		for (key2 in _arrayListObj) { // finding a key2 shorter/longer than key
			if (key2 != key) {
				var len  = _arrayListObj[key].length,
					len2 = _arrayListObj[key2].length,
					cond = (_shorter) ? (len2 < len) : (len2 > len);
				if (cond) keyOK = false; // at least one key2 is shorter/longer than key
			}
		}
		if (keyOK) keyListOK.push(key);
	}
	return keyListOK;
}
function showArray(_arrName,_arr,_htmlHook,_delta) {
	var newArr = (_delta != undefined) ? 'Nuovo ' : ''; 	
	$('.'+_htmlHook).html('<tr><td class="hl3">'+newArr+'Array '+_arrName+'</td><td></td></tr>');
	$('.'+_htmlHook).append('<tr><td>'+_arr.length+' element'+((_arr.length==1)?'o':'i')+'</td><td></td></tr>');
	for (var i=0; i<_arr.length; i++){
		if (_delta != undefined) var tr_class = ((i+1)>(_arr.length - _delta)) ? ' class="hl2"': '';
		$('.'+_htmlHook).append('<tr '+tr_class+'><td>'+_arrName+'['+i+']</td><td>'+_arr[i]+'<td></tr>');
	}
}



// * ---------- * JS SNACK 7 * ---------- *
// no functions yet



// * ---------- * JS SNACK 8 * ---------- *
// no functions yet



// * ------- * JS SNACK LABELS * -------- *
function showJsSnackLabels() {
	$('.card').append('<div class="label"></div>');
	$('.label').each(function(n) {
		$(this).html('<span>Js Snack '+(n+1)+'</span>');
	});	
}
