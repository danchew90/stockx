$(function () {
  var showBox = $(".boxColumn").eq(num).children("ul>li").index();
  var num = $(this).index();
  var obj1 = $(".country>li:eq(0)").clone();
  var obj2 = $(".lang>li:eq(0)").clone();
  var obj3 = $(".money>li:eq(0)").clone();
  $(".country").append(obj1);
  $(".lang").append(obj2);
  $(".money").append(obj3);
  function over() {
    $(".column").on("mouseover", function () {
      num = $(this).index();
      // console.log(num);
      $(".upDown").eq(num).stop().fadeIn(300);
    });
    $(".column").on("mouseout", function () {
      $(".upDown").stop().fadeOut(300);
    });
  }

  function moveCon() {
    $(".boxColumn")
      .eq(num)
      .children("ul")
      .stop()
      .animate(
        {
          marginTop: `${-showBox * 20}px`,
        },
        500
      );
    // console.log(num);
  }

  $(".up").click(function () {
    // console.log(showBox);
    if (showBox == -1) {
      showBox = 1;
    }
    if (showBox >= 5) {
      showBox = 0;
      $(".boxColumn")
        .eq(num)
        .children("ul")
        .css("margin-top", `${-showBox * 20}px`);
    }

    moveCon();
    showBox++;
  });

  $(".down").click(function () {
    // console.log(showBox);
    if (showBox <= 0) {
      showBox = 5;
      $(".boxColumn")
        .eq(num)
        .children("ul")
        .css("margin-top", `${-showBox * 20}px`);
    }

    showBox--;
    moveCon();
  });

  over();
});
