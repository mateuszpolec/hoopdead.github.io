var level = 1;
var operations = ["+", "-", "*"]
var answer = 0;
var points = 0;
var timer = false;

function create_math()
{
    if(!timer)
    {
        timer = true;
        alert("Start");
    }
    var first_number = Math.floor((Math.random() * level*2) + 1);
    var second_number = Math.floor((Math.random() * level*2) + 1);
    var operation = Math.floor((Math.random() * 3) + 0);
    document.getElementById("firstnumber").innerHTML = first_number;
    document.getElementById("operation").innerHTML = operations[operation];
    document.getElementById("secondnumber").innerHTML = second_number;
    $("#demo").css("display", "none");
    $("#game").css("display", "flex");
    switch(operation)
    {
        case 0:
            answer = first_number + second_number;
            document.getElementById("answer").innerHTML = answer;
            break;
        case 1:
            answer = first_number - second_number;
            document.getElementById("answer").innerHTML = answer;
            break;

        case 2:
            answer = first_number * second_number;
            document.getElementById("answer").innerHTML = answer;
            break;

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
    }
    else
    {
    }
}
setTimeout(function start_timer() {
    console.log(level);
}, 60000);