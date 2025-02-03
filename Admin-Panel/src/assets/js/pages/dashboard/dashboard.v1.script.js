var options = {
  colors: [colors[2], colors[3]],

  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 80,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector('#dashboard-v1-1'), options);
chart.render();

var options = {
  fill: {
    colors: [colors[1], colors[4], colors[0], colors[2], colors[3]],
  },
  series: [44, 55, 13, 43, 22],
  chart: {
    width: '100%',
    type: 'pie',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          // width: 200
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector('#dashboard-v1-2'), options);
chart.render();

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
var sparklineData = [30, 40, 20, 50, 40, 80];

var spark1 = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },

  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    opacity: 0.3,
  },
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: [colors[2]],
};

var spark1 = new ApexCharts(document.querySelector('#dashboard-v1-3'), spark1);
spark1.render();

var spark2 = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },

  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    opacity: 0.3,
  },
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  yaxis: {
    min: 0,
  },
  colors: ['#FCD34D'],
};

var spark2 = new ApexCharts(document.querySelector('#dashboard-v1-4'), spark2);
spark2.render();

const dataTable3 = new simpleDatatables.DataTable('.table-3', {
  searchable: false,
  sortable: false,
});
