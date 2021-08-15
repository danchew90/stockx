$(function () {
  $(".modulePoint").on("click", function () {
    $(".sizeModule").fadeIn(1200);
  });
  $(".closeBtn").on("click", function () {
    $(".sizeModule").fadeOut(1200);
  });

  $(".size>li").click("on", function () {
    var sizeValue = $(this).children("a").children(".sizeTitle").text();
    var priseValue = $(this).children("a").children(".sell").text();

    $(".sizeModule").fadeOut(1200);
    $(".sizeTab").text(sizeValue);
    $(".priceBox>span").eq(0).text(`${priseValue}원`);
  });
});
