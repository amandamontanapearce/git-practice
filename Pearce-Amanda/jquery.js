$(document).ready( function () {
  $("#extra").hide();
  $("button").click( function () {
    $("#extra").slideDown("fast");
    $("button").hide();
  });
  $("#chive").hover( function () {
    $("#chiveExpln").show();}, function () {
      $("#chiveExpln").hide();
  });
   $("#blackCanyon").hover( function () {
    $("#blackExpln").show();}, function () {
      $("#blackExpln").hide();
  });
   $("#html5").hover( function () {
    $("#htmlExpln").show();}, function () {
      $("#htmlExpln").hide();
  });
    $("#visionQuote").hover( function () {
      $("#quoteExpln").show();}, function () {
        $("#quoteExpln").hide();
  });
});