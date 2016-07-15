/***************
VAR
***************/

var $close = $('.close');
var $close1 = $('.close_1');
var $close2 = $('.close_2');
var $info = $('.alert_info');
var $info1 = $('.info_1');
var $info2 = $('.info_2');

var $hourly = $('#hourly');
var $daily = $('#daily');
var $weekly = $('#weekly');
var $monthly = $('#monthly');
var $hourlyChart = $('#lineChart_hourly');
var $dailyChart = $('#lineChart_daily');
var $weeklyChart = $('#lineChart_weekly');
var $monthlyChart = $('#lineChart_monthly');



/***************
ALERT FUNCTION
***************/

$(document).ready(function(){
  $info.show();
});

$close.click("on", function(){
  $info.hide();
});



/***************
DOCUMENT READY FUNCTION
***************/

$(document).ready(function() {
  $hourly.addClass("selected");
  $hourlyChart.show();
  $dailyChart.hide();
  $weeklyChart.hide();
  $monthlyChart.hide();
});



/***************
CHANGING LINE CHARTS ON CLICK
***************/

$hourly.click("on", function(){
  $hourlyChart.show();
  $dailyChart.hide();
  $weeklyChart.hide();
  $monthlyChart.hide();
});

$daily.click("on", function(){
  $hourlyChart.hide();
  $dailyChart.show();
  $weeklyChart.hide();
  $monthlyChart.hide();
});

$weekly.click("on", function(){
  $hourlyChart.hide();
  $dailyChart.hide();
  $weeklyChart.show();
  $monthlyChart.hide();
});

$monthly.click("on", function(){
  $hourlyChart.hide();
  $dailyChart.hide();
  $weeklyChart.hide();
  $monthlyChart.show();
});



/***************
ADDED FUNCIONALITY TO LINE CHART NAVIGATION
***************/

$hourly.click("on", function(){
  $weekly.removeClass( "selected" );
  $daily.removeClass( "selected" );
  $monthly.removeClass( "selected" );
  $hourly.addClass( "selected" );
});

$daily.click("on", function(){
  $weekly.removeClass( "selected" );
  $hourly.removeClass( "selected" );
  $monthly.removeClass( "selected" );
  $daily.addClass( "selected" );
});

$weekly.click("on", function(){
  $hourly.removeClass( "selected" );
  $daily.removeClass( "selected" );
  $monthly.removeClass( "selected" );
  $weekly.addClass( "selected" );
});

$monthly.click("on", function(){
  $weekly.removeClass( "selected" );
  $hourly.removeClass( "selected" );
  $daily.removeClass( "selected" );
  $monthly.addClass( "selected" );
});



/***************
HOURLY
***************/

var lineChart = document.getElementById("lineChart_hourly");
var myChart = new Chart(lineChart, {

  type: 'line',
    data: {
      labels: ["00", "02", "03", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24",],
        datasets: [{
        label: 'Traffic',
        lineTension: 0.2,
        backgroundColor: 'rgba(96, 96, 205, 0.2)',
        borderCapStyle: 'square',
        borderColor: "#6E75DA",
        pointBorderColor: '#545475',
        pointBackgroundColor: '#F6F7FF',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        data: [2, 4, 4, 6, 10, 16, 12, 18, 16, 15, 21, 16, 12, 6]
      }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



/***************
DAILY
***************/

var lineChart = document.getElementById("lineChart_daily");
var myChart = new Chart(lineChart, {

  type: 'line',
    data: {
      labels: ["1", "7", "14", "21", "28", "31"],
        datasets: [{
        label: 'Traffic',
        lineTension: 0.2,
        backgroundColor: 'rgba(96, 96, 205, 0.2)',
        borderCapStyle: 'square',
        borderColor: "#6E75DA",
        pointBorderColor: '#545475',
        pointBackgroundColor: '#F6F7FF',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        data: [70, 50, 86, 110, 60, 40]
      }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



/***************
WEEKLY
***************/

var lineChart = document.getElementById("lineChart_weekly");
var myChart = new Chart(lineChart, {

  type: 'line',
    data: {
      labels: ["1","5","10","15", "20", "25", "30", "35", "40", "45", "50", "52"],
        datasets: [{
        label: 'Traffic',
        lineTension: 0.2,
        backgroundColor: 'rgba(96, 96, 205, 0.2)',
        borderCapStyle: 'square',
        borderColor: "#6E75DA",
        pointBorderColor: '#545475',
        pointBackgroundColor: '#F6F7FF',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        data: [200, 250, 400, 600, 700, 1000, 1500, 1300, 1000, 900, 1000, 1200]
      }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



/***************
MONTHLY
***************/

var lineChart = document.getElementById("lineChart_monthly");
var myChart = new Chart(lineChart, {

  type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
        label: 'Traffic',
        lineTension: 0.2,
        backgroundColor: 'rgba(96, 96, 205, 0.2)',
        borderCapStyle: 'square',
        borderColor: "#6E75DA",
        pointBorderColor: '#545475',
        pointBackgroundColor: '#F6F7FF',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        data: [400, 500, 500, 700, 1000, 1500, 1400, 1700, 1350, 900, 700, 900]
      }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



/***************
BAR CHART
***************/

var barChart = document.getElementById("barChart");
var myChart2 = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Visited',
                data: [80, 100, 174, 125, 205, 221, 43],
                backgroundColor: "rgba(96, 96, 205, 0.6)",
            },
            {
                label: 'Signed Up',
                data: [38, 67, 118, 96, 180, 168, 25],
                backgroundColor: "rgba(255, 181, 107, 0.6)",
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});



/***************
PIE CHART
***************/

var doughnutChart = document.getElementById("pieChart");
var myChart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop",
            "W. phone",
            "IOS"
        ],
        datasets: [{
            data: [62, 40, 33, 23, 27],
            backgroundColor: [
                "rgb(115, 250, 121)",
                "rgb(128, 255, 255)",
                "rgb(96, 96, 205)",
                "rgb(255, 202, 128)",
                "rgb(230, 230, 255)",
            ]
          }]
      },
    options: { 
      cutoutPercentage: 40,
  }
});



/***************
MESSAGE USER
***************/













