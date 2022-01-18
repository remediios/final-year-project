import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoChart } from "../../../config/chart/api";
import CircularProgress from "@mui/material/CircularProgress";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";

const DashChart = () => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const currency = "GBP";

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(CryptoChart("bitcoin", days, currency));
    console.log(data.prices);
    setHistoricalData(data.prices);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchHistoricalData();
    }, 2000);
  }, [days]);

  return (
    <>
      {!historicalData ? (
        <CircularProgress
          style={{ color: "rgba(36, 44, 92)" }}
          size={100}
          thickness={1}
        />
      ) : (
        <Line
          data={{
            labels: historicalData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
                label: `Price (Past ${days} Days) in ${currency}`,
                borderColor: "rgba(36, 44, 92)",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 2,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default DashChart;
