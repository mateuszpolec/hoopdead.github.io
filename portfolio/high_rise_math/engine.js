var level = 1;
var operations = ["+", "-", "*"]
var answer = 0;
var timer = false;
var initial;
var mathematicians_array = ["first", "second", "third"];
var improve_array = ["first", "second"];

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

function submit_answer()
{
    var input = document.getElementById("userInput").value;
    level = level + 1;    
    if (input == answer)
    {
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

function json_getter()
{
    var xmlhttp = new XMLHttpRequest();
    var temp = Math.floor((Math.random() * 3) + 0);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var random = myObj.featured[Math.floor(Math.random() * myObj.featured.length)];
        console.log(random);
      }
    };
    xmlhttp.open("GET", "json.json", true);
    xmlhttp.send();
    console.log(mathematicians_array[temp]);
}

function reset()
{
    level = 1;
    answer = 0;
    points = 0;
    timer = false;
    $("#final").css("display", "none");
    create_math();
    clearTimeout( initial );
    invocation();
}


function invocation() {
    initial = window.setTimeout( 
    function() {
        $("#game").css("display", "none");
        $("#score").html(level * 60);
        $("#final").css("display", "flex");    
    }, 60000);
}

