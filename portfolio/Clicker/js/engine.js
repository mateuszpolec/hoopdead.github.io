var cash = 0; //inicjalizacja zmiennej pieniedzy

var lemonCash = 0; //inicjalizacja zmiennej - ile gracz bedzie dostawal pieniedzy po kupnie budki z lemoniada
var lemonAmmount = 0; //inicjalizacja zmiennej - ilosc budek z lemoniada
var lemonCost = 10; //inicjalizacja zmiennej - koszt za jedna budke z lemoniada
var lemonCostVisible = 10;
var lemonCashVisible = 0;

var carCash = 0; //inicjalizacja zmiennej - ile gracz bedzie dostawal pieniedzy po kupnie warsztatu samochodowego
var carAmmount = 0; //inicjalizacja zmiennej - ilosc warsztatów samochodowych
var carCost = 1000; //inicjalizacja zmiennej - koszt warsztatu samochodowego
var carCostVisible = 1000;
var carCashVisible = 0;

var officialAmmount = 0;

var darkmode = 0; //zmienna darkmode - (0 - tryb dzienny, 1 - tryb nocny :) )

var temp = 100;

var lemonAchiv, x = "";
var lemonaI = 0;


//https://i.imgur.com/XcSj6q8.png - day mode

//https://i.imgur.com/96n3rEk.png - night mode

function cashClick(number)
{
	cash = 100 + cash + number + (0.01*lemonAmmount) + (0.5 * carAmmount); //Ile gracz bedzie dostawal pieniedzy przy jednym kliknieciu
	cashP = cash.toFixed(1); //skracanie liczby do jednej po przecinku
	cashP = Beautify(cashP);
	$('#cash').html(cashP);
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
		cashP = Beautify(cashP);
		if (lemonCash >= 1000)
		{
			$('#lemonCash').html(lemonCashVisible);
		}
		else
		{
			$('#lemonCash').html(lemonCashP);
		}
		lemonCost = Math.floor(10 * Math.pow(1.3,lemonAmmount)); //wzór na koszt kolejnej budki z lemoniada
		lemonCostVisible = Beautify(lemonCost);
		$('#lemonCost').html(lemonCostVisible);
		$('#lemonAmmount').html(lemonAmmount);
		$('#cash').html(cashP);
	};
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
		cashP = Beautify(cashP);
		carCashVisible = Beautify(carCashP);
		carCost = 1000 + carAmmount * 2;
		carCostVisible = Beautify(carCost);
		$('#carCost').html(carCostVisible);
		$('#carAmmount').html(carAmmount);
		$('#cash').html(cashP);
		$('#carCash').html(carCashVisible);
	};
}


window.setInterval(function(){
	
	cashClick((lemonAmmount*0.15) + (carAmmount * 10)); //ilosc pieniazkow na sekunde
	save(); //wywolanie funkcji zapisujacej stan gry
	x = " Hola, hola, <b>" + lemonAchiv.achivs[lemonaI] + "</b> is already avaiable! " + "Sir, you have to pay <b>" + Beautify(lemonAchiv.prices[lemonaI]) + "</b>$ for it!";
	$('#lemonAchiv').html(x);



	
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
	localStorage.setItem('lemonaI', JSON.stringify(lemonaI));
	console.log(JSON.parse(localStorage.getItem('lemonaI')));
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
	lemonaI = JSON.parse(localStorage.getItem('lemonaI'));
	cashP = cash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	lemonCashP = lemonCash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	carCashP = carCash.toFixed(1); //skraca zapis liczby do jednego miejsca po przecinku
	cashP = Beautify(cashP);
	lemonCashVisible = Beautify(lemonCashP);
	carCashVisible = Beautify(carCashP);
	carCostVisible = Beautify(carCost);
	lemonCostVisible = Beautify(lemonCost);
	$('#cash').html(cashP);
	$('#lemonCash').html(lemonCashP);
	$('#lemonCost').html(lemonCostVisible);
	$('#lemonAmmount').html(lemonAmmount);
	$('#carCash').html(carCash);
	$('#carCost').html(carCostVisible);
	$('#carAmmount').html(carAmmount);
	x = " Hola, hola, <b>" + lemonAchiv.achivs[lemonaI] + "</b> is already avaiable! " + "Sir, you have to pay <b>" + Beautify(lemonAchiv.prices[lemonaI]) + "</b>$ for it!";
	$('#lemonAchiv').html(x);

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
	localStorage.removeItem('lemonaI', JSON.parse(lemonaI));
	lemonaI = 0;
	cash = 0;
	lemonCash = 0;
	lemonCost = 10;
	lemonAmmount = 0;
	carCash = 0;
	carCost = 1000;
	carAmmount = 0;
	$('#cash').html(cash);
	$('#lemonCash').html(lemonCash);
	$('#lemonCost').html(lemonCost);
	$('#lemonAmmount').html(lemonAmmount);
	$('#carCash').html(carCash);
	$('#carCost').html(carCost);
	$('#carAmmount').html(carAmmount);
	$('#officialAmmount').html(officialAmmountP);

	
}

function darkMode()
{
	if (darkmode == 0)
	{
		darkmode = 1;
		$('body').css("backgroundImage", "url('https://i.imgur.com/96n3rEk.png')");
		$('#header').css("color", '#ddc986');
		$('.switch').css('background-color', '#000000'); 
		$('.card-title').css('color', 'white');
		$('.card-text').css('color', 'white');
		$('.navbar-light').css('background-color', '#000000');
		$('#cookieNumber').css('color', '#ffffff');
	}
	else
	{
		darkmode = 0;
		$('body').css("backgroundImage", "url('https://i.imgur.com/XcSj6q8.png')");
		$('#header').css('color', '#000000');
		$('.switch').css('background-color', '#ffffff'); 
		$('.card-title').css('color', 'black');
		$('.card-text').css('color', 'black');
		$('.navbar-light').css('background-color', '#ffffff');
		$('#cookieNumber').css('color', '#000000');
	}
}


function Beautify(what,floats)//Zmienia 9999999 w 9,999,999 :3 //credits for https://github.com/coderdojoindy/
{
	var str='';
	what=Math.round(what*100000)/100000;
	if (floats>0)
	{
		var floater=what-Math.floor(what);
		floater=Math.round(floater*100000)/100000;
		var floatPresent=floater?1:0;
		floater=(floater.toString()+'0000000').slice(2,2+floats);
		str=Beautify(Math.floor(what))+(floatPresent?('.'+floater):'');
	}
	else
	{
		what=Math.floor(what);
		what=(what+'').split('').reverse();
		for (var i in what)
		{
			if (i%3==0 && i>0) str=','+str;
			str=what[i]+str;
		}
	}
	return str;
}




$(document).ready(function()//particle z iloscia pieniedzy przy kliknieciu 
{
	$('#cookieNumber').html('+<b>' + temp + '</b>' + ' $');
	$('.fa-money-bill-alt').click(function() 
	{
		$('#cookieNumber').addClass('animate').delay(50).queue(function(next) 
		{
			$(this).removeClass('animate');
			next();
		});
	});
});

//* System for additional % from each place */
function lemonAchivBuy()
{
	if(cash >= lemonAchiv.prices[lemonaI])
	{
		alert('Jasne, masz wystarczajaco duzo pieniedzy!');
		lemonaI = lemonaI + 1;
	}
	else
	{
		alert('Nie, nie masz wystarzcajaco duzo pieniedzy.');
	}
}

lemonAchiv = {
	"achivs": [ "Extra Lemonade", "Lemonade Renter", "Lemonade Stand Franchise"],
	"prices": [ "10000", "500000", "2500000"]
};

$(document).ready(function(){
	$('#lemonHover').hover(function(){
		$('#lemonAchiv').css("visibility", "visible");
		}, function(){
		$('#lemonAchiv').css("visibility", "hidden");
	});
});

