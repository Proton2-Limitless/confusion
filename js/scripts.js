$(document).ready(function () {
  $("#registerBtn").click(function () {
    $("#registerModal").modal("toggle");
  });
  $("#login-modal").click(function () {
    $("#loginModal").modal("toggle");
  });
  $("#mycarousel").carousel({ interval: 1000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
});
