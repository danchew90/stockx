$(function () {
  var showBanner = 0;
  var obj = $(".itemImgWrap>.i1").clone();

  var total = $(".itemImgWrap>li").length;
  $(".itemImgWrap").append(obj);
  var cleanTotal = $(".itemImgWrap>li").length;
  $(".itemImgWrap").css("width", `${cleanTotal * 100}%`);
  $(".itemImgWrap>li").css("width", `${100 / cleanTotal}%`);

  function moveItem() {
    $(".itemImgWrap")
      .stop()
      .animate(
        {
          marginLeft: `${-showBanner * 100}%`,
        },
        1000
      );
    if (showBanner == total) {
      $(".pager>li").eq(0).addClass("active").siblings().removeClass("active");
    }
    $(".pager>li")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  $(".iRight").click("on", function () {
    if (showBanner == total) {
      showBanner = 0;
      $(".itemImgWrap").css("margin-left", 0);
    }
    showBanner++;
    moveItem();
  });
  $(".iLeft").click("on", function () {
    if (showBanner == 0) {
      showBanner = 3;
      $(".itemImgWrap").css("margin-left", `${-showBanner * 100}%`);
    }
    showBanner--;
    moveItem();
  });
});
