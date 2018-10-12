function showSubs()
{
    document.getElementById("profile").setAttribute("style", "display:none");
    document.getElementById("achiw").setAttribute("style", "display:none");
    document.getElementById("subs").setAttribute("style","display:block");
    document.getElementById("button1").setAttribute("class", "btn btn-outline-secondary");
    document.getElementById("button2").setAttribute("class", "btn btn-outline-secondary active");
    document.getElementById("button3").setAttribute("class", "btn btn-outline-secondary");

}

function showProfile()
{
    document.getElementById("achiw").setAttribute("style", "display:none");
    document.getElementById("profile").setAttribute("style", "display: block");
    document.getElementById("subs").setAttribute("style", "display: none");
    document.getElementById("button1").setAttribute("class", "btn btn-outline-secondary active");
    document.getElementById("button2").setAttribute("class", "btn btn-outline-secondary");
    document.getElementById("button3").setAttribute("class", "btn btn-outline-secondary");


}

function showAchiw()
{
    document.getElementById("achiw").setAttribute("style", "display:block");
    document.getElementById("profile").setAttribute("style", "display: none");
    document.getElementById("subs").setAttribute("style", "display: none"); 
    document.getElementById("button1").setAttribute("class", "btn btn-outline-secondary");
    document.getElementById("button2").setAttribute("class", "btn btn-outline-secondary");
    document.getElementById("button3").setAttribute("class", "btn btn-outline-secondary active");
}