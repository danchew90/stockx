$(function () {
  var showBanner = 0;
  var obj = $(".banner>.b1").clone();
  var total = $(".banner>li").length;
  $(".count").text(showBanner + 1);
  $(".total").text(total);

  $(".banner").append(obj);
  var cleanTotal = $(".banner>li").length;
  // console.log(cleanTotal);
  $(".banner").css("width", `${cleanTotal * 100}%`);
  $(".banner>li").css("width", `${100 / cleanTotal}%`);

  // 공통사항
  function moveBanner() {
    $(".banner")
      .stop()
      .animate(
        {
          marginLeft: `${-showBanner * 100}%`,
        },
        1000
      );
    if (showBanner == total) {
      $(".count").text(1);
    } else {
      $(".count").text(showBanner + 1);
    }
  }

  $(".right").click(function () {
    if (showBanner == total) {
      showBanner = 0;
      $(".banner").css("margin-left", 0);
    }
    showBanner++;
    moveBanner();
  });
  $(".left").click(function () {
    if (showBanner == 0) {
      showBanner = 3;
      $(".banner").css("margin-left", `${-showBanner * 100}%`);
    }
    showBanner--;
    moveBanner();
  });

  var timer = setInterval(function () {
    $(".right").trigger("click");
  }, 3000);

  $(".playStop").on("click", function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      timer = setInterval(function () {
        $(".right").trigger("click");
      }, 3000);
    } else {
      $(this).addClass("on");
      clearInterval(timer);
    }
  });
});
