$(function () {
  var showCal = 0;
  var obj = $(".calenderWrap>li").eq(0).clone();
  var total = $(".calenderWrap>li").length;
  $(".calenderWrap").append(obj);
  var cleanTotal = $(".calenderWrap>li").length;

  $(".calenderWrap").css("width", `${cleanTotal * 100}%`);
  $(".calenderWrap>li").css("width", `${100 / cleanTotal}%`);

  // move module
  function moveCal() {
    $(".calenderWrap")
      .stop()
      .animate(
        {
          marginLeft: `${-showCal * 100}%`,
        },
        1000
      );
  }

  $(".rightCal").click(function () {
    if (showCal == 3) {
      showCal = 0;
      $(".calenderWrap").css("margin-left", 0);
    }
    showCal++;
    moveCal();
  });
  $(".leftCal").click(function () {
    if (showCal == 0) {
      showCal = 3;
      $(".calenderWrap").css("margin-left", `${-showCal * 100}%`);
    }
    showCal--;
    moveCal();
  });
});
