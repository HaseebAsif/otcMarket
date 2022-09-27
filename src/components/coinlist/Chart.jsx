import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import { useCallback } from "react";
const Chart = ({ attributeKey, loss }) => {
  const [color, setColor] = useState();
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    const data = await fetch(
      `https://api.coinstats.app/public/v1/charts?period=24h&coinId=${attributeKey}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => data);
    const prices = data.chart;
    const updatedData = prices.map((prices) => [prices[0] * 1000, prices[1]]);
    const sortedArray = updatedData.sort(function (a, b) {
      return b[0] - a[0];
    });

    let seriesColor = loss ? "#ff4d4d" : "#6ccf59";
    // let priceIncrease =
    //   sortedArray[0][0] - sortedArray[sortedArray.length - 1][0];
    // seriesColor = loss ? "#6ccf59" : "#ff4d4d";
    setColor(seriesColor);
    setData(updatedData);
  }, []);
  useEffect(() => {
    getData();
  }, []);

  const options = {
    chart: {
      height: "100px",
      width: "200px",
    },
    colorAxis: {
      visible: false,
      showInLegend: false,
    },
    legend: {
      accessibility: {
        enabled: false,
      },
    },
    labels: {
      enabled: false,
    },
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
      width: "350px",
      tickLength: 0,
    },

    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: "",
      },
      height: "100px",
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },
    series: [
      {
        name: "",
        data: data,
        type: "spline",
        tooltip: {
          valueDecimals: 2,
        },
        color: color,
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
    tooltip: {
      enabled: false,
    },
  };

  return (
    <>
      {data && (
        <HighchartsReact
          //   constructorType={"stockChart"}
          highcharts={Highcharts}
          options={options}
        />
      )}
    </>
  );
};

export default Chart;
