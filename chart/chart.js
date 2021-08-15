var options = {
  series: [
    {
      data: [
        [1614351600000, 550000],
        [1614524400000, 630000],
        [1614956400000, 450000],
        [1615388400000, 450000],
        [1616079600000, 410000],
        [1616598000000, 436000],
        [1617202800000, 375000],
        [1619103600000, 305000],
        [1619794800000, 321000],
        [1622473200000, 390000],
        [1624028400000, 370000],
        [1625065200000, 309000],
      ],
    },
  ],
  chart: {
    id: "area-datetime",
    type: "area",
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
  },

  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
    min: new Date("26 feb 2021").getTime(),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  stroke: {
    curve: "smooth",
    width: 1,
    colors: "#41b979",
  },
  fill: {
    type: "gradient",
    gradient: {
      // shadeIntensity:1,
      colorStops: [
        {
          offset: 0,
          color: "#41b979",
          opacity: 1,
        },
        {
          offset: 50,
          color: "#41b979",
          opacity: 0.5,
        },
        {
          offset: 100,
          color: "#41b979",
          opacity: 0.1,
        },
      ],
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var resetCssClasses = function (activeEl) {
  var els = document.querySelectorAll("button");
  Array.prototype.forEach.call(els, function (el) {
    el.classList.remove("active");
  });

  activeEl.target.classList.add("active");
};

// document.querySelector("#one_month").addEventListener("click", function (e) {
//   resetCssClasses(e);

//   chart.zoomX(
//     new Date("28 Jan 2013").getTime(),
//     new Date("27 Feb 2013").getTime()
//   );
// });

// document.querySelector("#six_months").addEventListener("click", function (e) {
//   resetCssClasses(e);

//   chart.zoomX(
//     new Date("27 Sep 2012").getTime(),
//     new Date("27 Feb 2013").getTime()
//   );
// });

// document.querySelector("#one_year").addEventListener("click", function (e) {
//   resetCssClasses(e);
//   chart.zoomX(
//     new Date("27 Feb 2012").getTime(),
//     new Date("27 Feb 2013").getTime()
//   );
// });

// document.querySelector("#ytd").addEventListener("click", function (e) {
//   resetCssClasses(e);

//   chart.zoomX(
//     new Date("01 Jan 2013").getTime(),
//     new Date("27 Feb 2013").getTime()
//   );
// });

// document.querySelector("#all").addEventListener("click", function (e) {
//   resetCssClasses(e);

//   chart.zoomX(
//     new Date("23 Jan 2012").getTime(),
//     new Date("27 Feb 2013").getTime()
//   );
// });
