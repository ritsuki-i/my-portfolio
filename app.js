$(document).on("change", "#sitelink", function () {
    if ($("#sitelink").is(":checked")) {
      $("#sitelink").parent().css("color", "rgb(0, 0, 255)");
      $(".qr").show();
      $(".footer").outerHeight(450);
    } else {
      $("#sitelink").parent().css("color", "rgb(0, 0, 0)");
      $(".qr").hide();
      $(".footer").outerHeight(90);
    } 
  });