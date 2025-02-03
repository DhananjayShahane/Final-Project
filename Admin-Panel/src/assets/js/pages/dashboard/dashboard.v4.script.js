'use stricts';

// basic area
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'income 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'income 2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],

  //   colors: ['#6ed3cf', '#4caf50'],
  colors: [colors[1], colors[2]],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart'),
  bAOptions
);

chart.render();
// end basic area

// basic area 2
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'approve 1',
      data: [90, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'approve 2',
      data: [11, 90, 45, 32, 34, 52, 41],
    },
  ],
  colors: [colors[0], colors[3]],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart2'),
  bAOptions
);

chart.render();
// end basic area 2

// basic area 3
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  series: [
    {
      name: 'transaction 1',
      data: [11, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'transaction 2',
      data: [100, 40, 45, 32, 34, 0, 41],
    },
  ],
  colors: [colors[2], colors[1]],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart3'),
  bAOptions
);

chart.render();
// end basic area 3

// basic area 4  not working
var bAOptions = {
  chart: {
    height: 100,
    type: 'area',
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },
  series: [
    {
      name: 'sales 1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'sales 2',
      data: [11, 32, 90, 32, 34, 52, 41],
    },
  ],
  colors: [colors[3], colors[2]],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart4'),
  bAOptions
);

chart.render();
// end basic area 4

var options = {
  chart: {
    height: 250,
    type: 'area',

    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 1,
  },

  series: [
    {
      name: 'STOCK ABC',
      data: [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        39,
        62,
        35,
        41,
        35,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46,
      ],
    },
  ],
  colors: [colors[4]],
};

var chart = new ApexCharts(
  document.querySelector('#basicArea-chart5'),
  options
);

chart.render();

var options = {
  series: [42, 47, 52, 58, 65],
  chart: {
    height: 350,
    width: '100%',
    type: 'polarArea',
  },

  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: colors[4],
      shadeTo: 'light',
      shadeIntensity: 0.6,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector('#monochrome-chart'),
  options
);
chart.render();
