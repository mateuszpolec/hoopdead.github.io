let tab_id = "tab";

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
