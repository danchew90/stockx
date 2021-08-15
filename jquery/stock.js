$(function () {
  var showStock = 0;
  var obj = $(".stockWrap").clone();
  $(".stock").append(obj);

  function moveStock() {
    if (showStock > 1) {
      showStock = 0;
      $(".stock").css("margin-left", 0);
    }
    showStock++;
    $(".stock")
      .stop()
      .animate(
        {
          marginLeft: `${showStock * -1000}px`,
        },
        7000,
        "linear"
      );
  }

  setInterval(moveStock, 5000);
});
