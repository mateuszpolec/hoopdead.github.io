let tab_id = "tab";
let about = false;

$(".showproject").click(function() {
  $("#main").css("display", "none");
  $("#scene").css("display", "flex");
  $("#scene").css("z-index", "1");
  $("#projects").css("display", "flex");
  tab_id = $(this).attr("data-tab");
  $("#" + tab_id).css("display", "flex");
  setTimeout(function() {
    $("#scene").css("display", "none");
    $("#scene").css("z-index", "0");
  }, 2000);
});

$(".showabout").click(function() {
  if (about) {
    console.log("You are already here!");
  } else {
    console.log("About is test");
    $("#scene2").css("display", "flex");
    $("#about").css("display", "flex");
    $("#content").css("display", "none");
    about = true;
    setTimeout(function() {
      $("#scene2").css("display", "none");
      $("#scene2").css("z-index", "0");
    }, 2000);
  }
});
