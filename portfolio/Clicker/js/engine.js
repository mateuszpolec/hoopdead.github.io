var cash = 0; //inicjalizacja zmiennej pieniedzy

var lemonCash = 0; //inicjalizacja zmiennej - ile gracz bedzie dostawal pieniedzy po kupnie budki z lemoniada
var lemonAmmount = 0; //inicjalizacja zmiennej - ilosc budek z lemoniada
var lemonCost = 10; //inicjalizacja zmiennej - koszt za jedna budke z lemoniada

var carCash = 0; //inicjalizacja zmiennej - ile gracz bedzie dostawal pieniedzy po kupnie warsztatu samochodowego
var carAmmount = 0; //inicjalizacja zmiennej - ilosc warsztatów samochodowych
var carCost = 1000; //inicjalizacja zmiennej - koszt warsztatu samochodowego

var officialAmmount = 0;

function cashClick(number)
{
	cash = cash + number + (0.01*lemonAmmount) + (0.5 * carAmmount) + Math.pow(2, officialAmmount); //Ile gracz bedzie dostawal pieniedzy przy jednym kliknieciu
	cashP = cash.toFixed(1); //skracanie liczby do jednej po przecinku
	document.getElementById("cash").innerHTML = cashP; //wyswietlanie poprawionej liczby
};



function lemonBuy()
{
	if (cash >= lemonCost)
	{
		lemonAmmount = lemonAmmount + 1; //dodawanie jednej budki z lemoniada
		cash = cash - lemonCost; //odejmowanie od pieniedzy kosztu budki z lemoniada
		lemonCash = (0.15*lemonAmmount); //mnoznik za jedna budki z lemoniada
		cashP = cash.toFixed(1); //skracanie liczby do jednej po przecinku
		lemonCashP = lemonCash.toFixed(1); //skracanie liczby do jednej po przecinku
		document.getElementById('lemonAmmount').innerHTML = lemonAmmount; //wyswietlanie ilosci budek z lemoniada
		document.getElementById('cash').innerHTML = cashP; //wyswietlanie poprawionej liczby - pieniadze
		document.getElementById('lemonCash').innerHTML = lemonCashP; //wyswietlanie poprawionej liczby - zarobek budki z lemoniada
	};
    lemonCost = Math.floor(10 * Math.pow(1.3,lemonAmmount)); //wzór na koszt kolejnej budki z lemoniada
	document.getElementById('lemonCost').innerHTML = lemonCost; //wyswietlanie kosztu kolejnej budki z lemoniada
};

function carBuy()
{
	if (cash >= carCost)
	{
		carAmmount = carAmmount + 1; //cała sekcja działa dokładnie tak samo, jak ta wyżej, tylko z warsztatami samochodowymi
		cash = cash - carCash;
		carCash = (10*carAmmount);
		cashP = cash.toFixed(1);
		carCashP = carCash.toFixed(1);
		document.getElementById('carAmmount').innerHTML = carAmmount;
		document.getElementById('cash').innerHTML = cashP;
		document.getElementById('carCash').innerHTML = carCashP;
	};
	carCost = Math.floor(10 * Math.pow(1.4, carAmmount));
	document.getElementById('carCost').innerHTML = carCost;
}


window.setInterval(function(){
	
	cashClick((lemonAmmount*0.15) + (carAmmount * 10)); //ilosc pieniazkow na sekunde
	save(); //wywolanie funkcji zapisujacej stan gry

	
}, 1000); //1 sekunda

function save()
{
	localStorage.setItem('cash', JSON.stringify(cash)); //zapisuje ilosc pieniedzy 
	localStorage.setItem('lemonCash', JSON.stringify(lemonCash)); //zapisuje stan zarobku budek z lemoniada
	localStorage.setItem('lemonCost', JSON.stringify(lemonCost)); //zapisuje stan kosztu jednej budki z lemoniada
	localStorage.setItem('lemonAmmount', JSON.stringify(lemonAmmount)); //zapisuje ilosc budek z lemoniada
	localStorage.setItem('carCash', JSON.stringify(carCash)); //zapisuje stan zarobku warsztatu samochodowego
	localStorage.setItem('carCost', JSON.stringify(carCost)); //zapisuje stan kosztu jednego warsztatu samochodowego
	localStorage.setItem('carAmmount', JSON.stringify(carAmmount)); //zapisuje ilosc warsztatów samochodowych
}

function load()
{
	cash = JSON.parse(localStorage.getItem('cash')); //wczytuje stan pieniedzy
	lemonCash = JSON.parse(localStorage.getItem('lemonCash')); //wczytuje stan zarobku budek z lemoniada
	lemonCost = JSON.parse(localStorage.getItem('lemonCost')); //wczytuje stan kosztu jednej budki z lemoniada
	lemonAmmount = JSON.parse(localStorage.getItem('lemonAmmount')); //wczytuje ilosc budek z lemoniada
	carCash = JSON.parse(localStorage.getItem('carCash')); //wczytuje stan zarobku wasztatu samochodowego
	carCost = JSON.parse(localStorage.getItem('carCost')); //wczytuje koszt jednego warsztatu samochodowego
	carAmmount = JSON.parse(localStorage.getItem('carAmmount')); //wczytuje ilosc warsztatów samochodowych
	cashP = cash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	lemonCashP = lemonCash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	carCashP = carCash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	document.getElementById('cash').innerHTML = cashP;
	document.getElementById('lemonCash').innerHTML = lemonCashP;
	document.getElementById('lemonCost').innerHTML = lemonCost;
	document.getElementById('lemonAmmount').innerHTML = lemonAmmount;
	document.getElementById('carCash').innerHTML = carCash;
	document.getElementById('carCost').innerHTML = carCost;
	document.getElementById('carAmmount').innerHTML = carAmmount;
}

function gameRestart()
{
	officialAmmount = officialAmmount + (cash * 0.01);
	officialAmmountP = officialAmmount.toFixed(1);
	localStorage.removeItem('cash', JSON.parse(lemonCash));
	localStorage.removeItem('lemonCash', JSON.parse(lemonCash));
	localStorage.removeItem('lemonCost', JSON.parse(lemonCost));
	localStorage.removeItem('lemonAmmount', JSON.parse(lemonAmmount));
	localStorage.removeItem('carCash', JSON.parse(carCash));
	localStorage.removeItem('carCost', JSON.parse(carCost));
	localStorage.removeItem('carAmmount', JSON.parse(carAmmount));
	cash = 0;
	lemonCash = 0;
	lemonCost = 10;
	lemonAmmount = 0;
	carCash = 0;
	carCost = 1000;
	carAmmount = 0;
	document.getElementById('cash').innerHTML = cash;
	document.getElementById('lemonCash').innerHTML = lemonCash;
	document.getElementById('lemonCost').innerHTML = lemonCost;
	document.getElementById('lemonAmmount').innerHTML = lemonAmmount;
	document.getElementById('carCash').innerHTML = carCash;
	document.getElementById('carCost').innerHTML = carCost;
	document.getElementById('carAmmount').innerHTML = carAmmount;
	document.getElementById('officialAmmount').innerHTML = officialAmmountP;
	
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});