function bodyGot()
{
    document.getElementById("right").setAttribute("style", "display: none");
    document.getElementById("left").setAttribute("style", "display: none");   
    document.getElementById("czlowiek").setAttribute("style", "display: block")
    document.getElementById("x").setAttribute("style", "display: block");
    document.getElementById("legs").setAttribute("style", "display: block");

}

function bodyOwn()
{
    document.getElementById("x").setAttribute("style", "display: block");
    document.getElementById("right").setAttribute("style", "display: none");
    document.getElementById("left").setAttribute("style", "display: none");
    document.getElementById("czlowiek").setAttribute("style", "display: block")
}

function legShow()
{
    document.getElementById("leg1").setAttribute("style", "display: block");
    document.getElementById("leg2").setAttribute("style", "display: block");
    document.getElementById("leg3").setAttribute("style", "display: block");
    document.getElementById("leg4").setAttribute("style", "display: block");
    document.getElementById("clock").setAttribute("style", "display: block");

}

function stomachShow()
{
    document.getElementById("notepad").setAttribute("style", "display: block");
}
