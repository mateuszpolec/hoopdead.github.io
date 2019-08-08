//Variables - level, operations, answer, timer, intial, and countdown.
//Level - function reset(), function invocation(), function() submit_answer().
//Operations - function create_math().
//answer - function result(), function submit_answer(), function reset().
//timer - function create_math(), function reset();
//intial - function reset(), function invocation().
//countdown - function init_game(), function start_timer().

var level = 1;
var operations = ["+", "-", "*"]
var answer = 0;
var timer = false;
var initial;
var countdown = 60;


//Start game function - docs (1).
function init_game()
{
    countdown = 60;
    $("#countdown").html(countdown);
    create_math();
}


//Tick every 1000ms, and decrease countdown value - docs (2).
function start_timer()
{
    setInterval(function(){ 
        countdown--;
        $("#countdown").html(countdown);
    }, 1000);
}

//Prepare math equation, also check, if timer started yet - docs (3).
function create_math()
{
    if(!timer)
    {
        timer = true;
        invocation();
    }
    var first_number = Math.floor((Math.random() * 20) + 1);
    var second_number = Math.floor((Math.random() * 20) + 1);
    var operation = Math.floor((Math.random() * 3) + 0);
    $("#firstnumber").html(first_number);
    $("#operation").html(operations[operation]);
    $("#secondnumber").html(second_number);
    $("#demo").css("display", "none");
    $("#game").css("display", "flex");
    result(first_number, operation, second_number);
}


//Solve equation and display it on site - docs (4).
function result(first_number, operation, second_number)
{
    if(operation == 0)
    {
        answer = first_number + second_number;
        $("#answer").html(answer);
    }
    else if(operation == 1)
    {
        answer = first_number - second_number;
        $("#answer").html(answer);
    }
    else if(operation == 2)
    {
        answer = first_number * second_number;
        $("#answer").html(answer);
    }
}

//Check, if enter button were pressed - docs (5).
function is_pressed()
{
    document.getElementById('userInput').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          submit_answer();
        }
      }
}

//Chceck, has player correctly sovle math problem - docs (6).
function submit_answer()
{
    var input = document.getElementById("userInput").value;
    if (input == answer)
    {
        level = level + 1;    
        document.getElementById("userInput").value = ""; 
        create_math();
        $("#game").css("background-color", "#238c24");
        setTimeout(function() {
            $("#game").css("background-color", "#00BBFF");
        }, 350);
    }
    else
    {
        $("#game").css("background-color", "#8f0e0e");
        setTimeout(function() {
            $("#game").css("background-color", "#00BBFF");
        }, 350);    
    }
}

//Get data from json file, and start_timer - docs (7).
function json_getter()
{
    start_timer();
    var xmlhttp = new XMLHttpRequest();
    var temp = Math.floor((Math.random() * 32) + 0);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var random = myObj.mathematicians[Math.floor(Math.random() * myObj.mathematicians.length)];
        document.getElementById("author").innerHTML = random.name;
        document.getElementById("famous_for").innerHTML = random.famous_for;
        document.getElementById("history").innerHTML = random.history;
      }
    };
    xmlhttp.open("GET", "mathematicians.json", true);
    xmlhttp.send();
}


//Start game again - reset all variables - docs (8).
function reset()
{
    level = 1;
    answer = 0;
    points = 0;
    timer = false;
    $("#final").css("display", "none");
    init_game();
    clearTimeout( initial );
    invocation();
}

//Give player 60 seconds in game - docs (9).
function invocation() {
    initial = window.setTimeout( 
    function() {
        $("#game").css("display", "none");
        $("#score").html(level * 60);
        $("#final").css("display", "flex");
    }, 60000);
}

