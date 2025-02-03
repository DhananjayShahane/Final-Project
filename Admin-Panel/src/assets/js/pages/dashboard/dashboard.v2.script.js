var options = {
  colors: [colors[0], colors[5]],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  series: [30, 70],
  chart: {
    type: 'donut',
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      expandOnClick: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

var options = {
  colors: [colors[5]],
  series: [
    {
      name: 'Desktops',
      data: [40, 80, 20, 90, 30, 80, 40],
    },
  ],
  markers: {
    size: 5,
    colors: colors[1],
  },
  chart: {
    height: 200,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  grid: {
    row: {
      colors: [colors[1], 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.2,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart2'), options);
chart.render();
