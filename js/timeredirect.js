var time = "2000";
var bukkit_link = "https://bukkit.org/";
var mortis_link = "https://mortisrpg.pl";
var culture_link = "https://dezerterzykultury.pl";
var rrp_link = "https://rainbowrp.pl/";

function timedRedirect_bukkit() {
  setTimeout("location.href = bukkit_link;",time);
}

function timedRedirect_mortis() {
    setTimeout("location.href = mortis_link",time);
}

function timedRedirect_culture() {
    setTimeout("location.href = culture_link",time);
}

function timedRedirect_alert()
{
    alert('Link zostanie dodany na dniach.');
}


function timedRedirect_rrp() {
    setTimeout("location.href = rrp_link",time);
}