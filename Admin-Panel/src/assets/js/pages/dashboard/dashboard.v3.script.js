'use stricts';

var options6 = {
  chart: {
    type: 'bar',
    width: '100%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      startingShape: 'flat',
      borderRadius: 100,
    },
  },
  colors: [colors[5]],

  series: [
    {
      data: [5, 15, 25, 35, 55, 75, 100, 75, 55, 35, 25, 15, 5],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ' ';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart13'), options6).render();
var options6 = {
  chart: {
    type: 'bar',
    width: '100%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      startingShape: 'flat',
      borderRadius: 100,
    },
  },
  colors: [colors[4]],

  series: [
    {
      data: [5, 15, 25, 35, 55, 75, 100, 75, 55, 35, 25, 15, 5],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ' ';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart14'), options6).render();

var options6 = {
  chart: {
    type: 'bar',
    width: '100%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      startingShape: 'flat',
      borderRadius: 100,
    },
  },
  colors: [colors[3]],

  series: [
    {
      data: [5, 15, 25, 35, 25, 15, 5, 10, 20, 30, 45, 65, 45, 30, 20, 10],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart15'), options6).render();

var options6 = {
  chart: {
    type: 'bar',
    width: '100%',
    height: 100,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      startingShape: 'flat',
      borderRadius: 100,
    },
  },
  colors: [colors[2]],

  series: [
    {
      data: [100, 85, 75, 55, 35, 25, 15, 5, 15, 25, 35, 55, 75, 85, 90, 100],
    },
  ],
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
};
new ApexCharts(document.querySelector('#chart16'), options6).render();

var options = {
  colors: [colors[5], colors[4], colors[3]],
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 100,
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
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
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

var chart = new ApexCharts(document.querySelector('#chart17'), options);
chart.render();

var options = {
  colors: [colors[4]],
  series: [
    {
      name: 'Net Profit',
      data: [20, 55, 30, 56, 20, 58, 33, 60, 46],
    },
  ],
  chart: {
    type: 'bar',
    height: 150,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '10%',
      borderRadius: 100,
      startingShape: 'rounded',
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
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart18'), options);
chart.render();
var options = {
  colors: ['#EF4444'],
  series: [
    {
      name: 'Net Profit',
      data: [20, 55, 30, 56, 20, 58, 33, 60, 46],
    },
  ],
  chart: {
    type: 'bar',
    height: 150,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '10%',
      borderRadius: 100,
      startingShape: 'rounded',
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
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart19'), options);
chart.render();
