function showGym()
{
    document.getElementById("gym").setAttribute("style", "display:block");
    document.getElementById("swim").setAttribute("style", "display: none");
    document.getElementById("squash").setAttribute("style", "display: none");
}

function showSwim()
{
    document.getElementById("gym").setAttribute("style", "display:none");
    document.getElementById("swim").setAttribute("style", "display: block");
    document.getElementById("squash").setAttribute("style", "display: none");  
}