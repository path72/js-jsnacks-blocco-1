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

$('.table1').html('<tr class="hl1"><td></td><td>varietà</td><td>peso</td><td>lunghezza</td></tr>');

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

$('.end_table1').html('<span class="hl3">Peso totale zucchine:</span> <span class="hl2">'+sum+'</span>');



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

$('.table2').html('<tr class="hl1"><td></td><td>varietà</td><td>peso</td><td>lunghezza</td><tr>');

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

$('.table4c').html('<tr class="hl1"><td></td><td>nome</td><td>cognome</td></tr>');

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

$('.table5').html('<tr class="hl1"><td></td><td>valore</td></tr>');

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
	$('.table5').append('<tr><td class="hl1">posizione #'+(i+1)+'</td><td'+td_class+'>'+intNumList[i]+'</td></tr>');

}

// showing sum
$('.end_table5').html('<span class="hl3">Somma:</span> <span class="hl2">'+oddSum+'</span>');




// * ---------- * JS SNACK 6 * ---------- *
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const arrSetLength  = 2,    // set of 2 arrays in an object
	  arrNamePrefix = 'A',  // array names: A1, A2
	  arrMaxLength  = 10,   // array length: random integer in [1,10]
	  arrElemRange  = 999; // array element name: A1_, A2_ + random integer in [1,999] 
var   arraySet      = getRandomIntArraySetObj(arrSetLength,arrNamePrefix,1,arrMaxLength,arrElemRange);

// shorter & longer array
var shorterArrKey = findShorterArrayInASetObj(arraySet,true);  // array of key of shorter arrays
var longerArrKey  = findShorterArrayInASetObj(arraySet,false); // array of key of longer arrays

// results
if (longerArrKey[0] != shorterArrKey[0]) {

	// showing different arrays
	showArray(longerArrKey[0], arraySet[longerArrKey[0]], 'table6a',undefined);
	showArray(shorterArrKey[0],arraySet[shorterArrKey[0]],'table6b',undefined);

	// array length difference
	var deltaLength = arraySet[longerArrKey[0]].length - arraySet[shorterArrKey[0]].length;
	
	$('.end_table6').html('<span class="hl3">Differenza iniziale: '+deltaLength+' element'+((deltaLength==1)?'o':'i')+' &rArr; array '+shorterArrKey[0]+' prolungato!</span>');
	for (var i=0; i<deltaLength; i++) {

		// filling shorter array
		arraySet[shorterArrKey[0]].push(shorterArrKey[0]+'_'+getRandomInt(1,1000));

	}

	// showing filled array
	showArray(shorterArrKey[0],arraySet[shorterArrKey[0]],'table6c',deltaLength);

} else {

	// showing equal length arrays
	showArray(arrNamePrefix+'1',arraySet[arrNamePrefix+'1'],'table6a',undefined);
	showArray(arrNamePrefix+'2',arraySet[arrNamePrefix+'2'],'table6b',undefined);

	// no contest
	$('.end_table6').html('<span class="hl3">Array di lunghezza uguale! (Ricarica la pagina)</span>');

}



// * ---------- * JS SNACK 7 * ---------- *
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// 2 arrays of random elements each and random length in [1,10]
const arrLen   = getRandomInt(1,10);
var  arrSetObj = getRandomIntArraySetObj(2,'Ciccio',arrLen,arrLen,99);
showArray('Ciccio1',arrSetObj.Ciccio1,'table7a',undefined);
showArray('Ciccio2',arrSetObj.Ciccio2,'table7b',undefined);

// merged array of 10 elements
var dosCiccios = getMergedArrOfEqualLength2(arrSetObj);
showArray('dosCiccios',dosCiccios,'table7c',(2*arrLen));



// * ---------- * JS SNACK 8 * ---------- *
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

// A1: array of random elements and random lenght in [1,20]
const arrLength     = getRandomInt(1,20);
var   startArrayObj = getRandomIntArraySetObj(1,'A',arrLength,arrLength,999);
showArray('A1',startArrayObj.A1,'table8a',undefined);

// random index range [rndA,rndB]
const rndA = getRandomInt(0,arrLength-1);
const rndB = getRandomInt(rndA,startArrayObj.A1.length-1);

// Extracting A1 elements in index sector [rndIntA,rndIntB]
var sectorA1 = getArrSectorAB(startArrayObj.A1,rndA,rndB);
showArray('sectorA1',sectorA1,'table8b',(rndB-rndA+1));

$('.end_table8').html('<span class="hl3">Estratto dall\'array A1 il settore di indici da '+rndA+' a '+rndB+'</span>');



// * ------- * JS SNACK LABELS * -------- *
showJsSnackLabels();


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


// * ---------- * JS SNACK 1 FUNCTIONS * ---------- *
// no functions



// * ---------- * JS SNACK 2 FUNCTIONS * ---------- *
// no functions



// * ---------- * JS SNACK 3 FUNCTIONS * ---------- *
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



// * ---------- * JS SNACK 4 FUNCTIONS * ---------- *
function getRandomInt(_a, _b) {
	return Math.floor(Math.random()*(_b-_a+1))+_a;
}
function showList(_id,_list,_domHook) {
	$('.'+_domHook).html('<tr class="hl1"><td></td><td>'+_id+'</td></tr>');
	for (var i=0; i<_list.length; i++) {
		$('.'+_domHook).append('<tr><td class="hl1">#'+(i+1)+'</td><td>'+_list[i]+'</td></tr>');
	}
}



// * ---------- * JS SNACK 5 FUNCTIONS * ---------- *
// function getRandomInt(_a, _b) {...}



// * ---------- * JS SNACK 6 FUNCTIONS * ---------- *
function getRandomIntArraySetObj(_arrSetLength,_arrPreName,_arrMinLength,_arrMaxLength,_arrElemRange) {
	/**
	 * returns a set of arrays as an object
	 * number of arrays in set : _arrSetLength
	 * array name (object key) : _arrPreName + order number 1,2,..
	 * array length            : random number in [_arrMinLength, _arrMaxLength]
	 * array element name      : array name + '_' + random number in [1, _arrElemRange]
	 */
	var arrSet = {}; // building array set as an object
	for (var i=1; i<=_arrSetLength; i++) arrSet[_arrPreName+i] = [];  // building each array
	if (_arrMinLength > _arrMaxLength) _arrMinLength = _arrMaxLength; // consistency check
	for (key in arrSet) // filling each array
		for (var i=0; i<getRandomInt(_arrMinLength,_arrMaxLength); i++)
			arrSet[key].push(key+'_'+getRandomInt(1,_arrElemRange));
	return arrSet;
}
function findShorterArrayInASetObj(_arrayListObj,_shorter) {
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
	$('.'+_htmlHook).html('<tr><td class="hl3" colspan="2">'+newArr+'Array '+_arrName+'</td></tr>');
	$('.'+_htmlHook).append('<tr><td colspan="2" class="hl1">'+_arr.length+' element'+((_arr.length==1)?'o':'i')+'</td></tr>');
	for (var i=0; i<_arr.length; i++){
		if (_delta != undefined) var tr_class = ((i+1) > (_arr.length - _delta)) ? ' class="hl2"': '';
		$('.'+_htmlHook).append('<tr '+tr_class+'><td>'+_arrName+'['+i+']</td><td>'+_arr[i]+'<td></tr>');
	}
}
// function getRandomInt(_a, _b) {...}



// * ---------- * JS SNACK 7 FUNCTIONS * ---------- *
function getMergedArrOfEqualLength2(_arrSetObj) {
	/**
	 * receives a set of arrays with object arrangement and
	 * returns a merged array of their alternate sequential elements
	 * 
	 * in case of not equal length input arrays 
	 * only a minimum number of elements will be considered
	 * for each array, equal to the shorter array in the set
	 * 
	 * function findShorterArrayInASetObj() is needed
	 */
	var arr = [];
	var length = _arrSetObj[findShorterArrayInASetObj(_arrSetObj,true)[0]].length;
	for (var i=0; i<length; i++)
		for (key in _arrSetObj)
			arr.push(_arrSetObj[key][i]);	
	return arr;
}
// function getRandomIntArraySetObj() {...}
// function showArray() {...}



// * ---------- * JS SNACK 8 FUNCTIONS * ---------- *
function getArrSectorAB(_arr,_A,_B) {
	/**
	 * receives an array _arr and
	 * returns a list of its elements in index sector [_A,_B]  
	 */
	// consistency check
	if (_A > _B) _A = _B;
	if (_B > _arr.length) _B = _arr.length;
	// selecting [_A,_B] sector
	var nArr = [];
	for (var i=0; i<(_B - _A + 1); i++) {
		nArr.push(_arr[i + _A]);
	}
	return nArr;
}
// function getRandomIntArraySetObj() {...}
// function getRandomInt(_a, _b) {...}



// * ------- * JS SNACK LABELS * -------- *
function showJsSnackLabels() {
	$('.card').append('<div class="label"></div>');
	$('.label').each(function(n) {
		$(this).html('<span>Js Snack '+(n+1)+'</span>');
	});	
}
