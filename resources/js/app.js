require('./bootstrap');


$(document).ready(function() {
    // Get the mobilehid div by its id
    var mobilehid = $("#mobilehid");

    // Initially, hide the mobilehid div to the right
    mobilehid.addClass("hidden");
    mobilehid.css("right", "-100%");

    // Add a click event to toggle the hidden class and slide animation
    $("#mobilebutton button").click(function() {
      mobilehid.toggleClass("hidden");
      mobilehid.animate({ right: "0" }, 300);
    });
  });