import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";

Exporting(Highcharts);

function Coingraph() {
  Highcharts.getJSON(
    "https://api.coinstats.app/public/v1/charts?period=24h&coinId=bitcoin",

    function (data) {
      const prices = data.chart;
      const updatedData = prices.map((prices) => [prices[0] * 1000, prices[1]]);
      const sortedArray = updatedData.sort(function (a, b) {
        return b[0] - a[0];
      });

      let seriesColor = "#6ccf59";
      let priceIncrease =
        sortedArray[0][0] - sortedArray[sortedArray.length - 1][0];
      seriesColor = priceIncrease < 0 ? "#6ccf59" : "#ff4d4d";
      console.log(updatedData);
      // Create the chart
      Highcharts.stockChart("container", {
        rangeSelector: {
          enabled: false,
        },
        title: {
          text: "",
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          lineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: "transparent",
          minorTickLength: 0,
          tickLength: 0,
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
        },
        series: [
          {
            name: "",
            data: updatedData,
            type: "spline",
            tooltip: {
              valueDecimals: 2,
            },
            color: seriesColor,
            enableMouseTracking: false,
          },
        ],
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        navigator: {
          enabled: false,
        },
        scrollbar: {
          enabled: false,
        },
      });
    }
  );

  return <div id="container">1</div>;
}

export default Coingraph;
