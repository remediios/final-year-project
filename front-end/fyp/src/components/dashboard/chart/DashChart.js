import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoChart } from "../../../config/chart/api";
import { buttonOptions } from "../../../config/chart/buttons";
import CircularProgress from "@mui/material/CircularProgress";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import {
  ChartCointainer,
  ButtonWrapper,
  CrytoTitle,
} from "../../../styles/dashboard/DashChart";
import DashChartButtons from "../buttons/DashChartButtons";

const DashChart = ({ currency, selectedCoin }) => {
  const [historicalData, setHistoricalData] = useState();
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(1);

  const fetchHistoricalData = async () => {
    setLoading(true);
    const { data } = await axios.get(CryptoChart(selectedCoin, days, currency));
    setHistoricalData(data.prices);
    setLoading(false);
  };

  useEffect(() => {
    fetchHistoricalData();
    //eslint-disable-next-line
  }, [days, selectedCoin]);

  return (
    <>
      <ChartCointainer>
        {!historicalData ? (
          <CircularProgress
            style={{ color: "rgba(36, 44, 92)" }}
            size={100}
            thickness={2}
          />
        ) : (
          <>
            <CrytoTitle>{selectedCoin.toUpperCase()}</CrytoTitle>
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
                    label: `Price (Past ${days} Days) in ${currency} £`,
                    borderColor: "rgba(36, 44, 92)",
                    backgroundColor: "white",
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
            <ButtonWrapper>
              {buttonOptions.map((day) => (
                <DashChartButtons
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </DashChartButtons>
              ))}
            </ButtonWrapper>
          </>
        )}
      </ChartCointainer>
    </>
  );
};

export default DashChart;
