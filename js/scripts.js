const hotelTitleHide = $(".hotel-welcome").hide();
const hotelTitleShow = $(".hotel-welcome").show();
$("#servicesButton").click(function() {
  console.log("works");
  $("#servicesModal").collapse("show");
  $(".hotel-welcome").hide();
});

$("#closeButton").click(function() {
  console.log("works");
  $(".modal").collapse("hide");
  $(".hotel-welcome").show();
});

$("#amenitiesButton").click(function() {});
