import axios from "axios";
import React, { useState, useEffect } from "react";
import { CryptoCoin } from "../../../config/chart/api";
import { CircularProgress } from "@mui/material";
import {
  CryptoDataWrapper,
  CryptoDescription,
  CryptoHeading,
  CryptoData,
  CryptoTitle,
  InfoCointainer,
  CryptoDataSpan,
  CryptoLogo,
  Button,
} from "../../../styles/dashboard/DashInfo";
import parse from "html-react-parser";
import * as IoIcons from "react-icons/io";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const DashInfo = ({ currency, selectedCoin, setCryptoInfo }) => {
  const [cryptoCoin, setCryptoCoin] = useState();
  const [profit, setProfit] = useState();

  const fetchCryptoCoin = async () => {
    const { data } = await axios.get(CryptoCoin(selectedCoin));
    setCryptoCoin(data);
    setProfit(data.market_data.price_change_percentage_24h > 0);
  };

  useEffect(() => {
    fetchCryptoCoin();
    // eslint-disable-next-line
  }, [selectedCoin]);

  return (
    <InfoCointainer>
      {!cryptoCoin ? (
        <CircularProgress
          style={{ color: "rgba(36, 44, 92)" }}
          size={100}
          thickness={2}
        />
      ) : (
        <>
          <CryptoLogo
            src={cryptoCoin?.image.large}
            alt={cryptoCoin?.name}
            height="200"
          />
          <CryptoTitle>
            {cryptoCoin?.name} ({cryptoCoin?.symbol?.toUpperCase()})
          </CryptoTitle>
          <CryptoDescription id="desc">
            {parse(cryptoCoin?.description.en.split(". ")[0])}.
          </CryptoDescription>
          <CryptoDataWrapper>
            <CryptoDataSpan>
              <CryptoHeading>Market Rank : </CryptoHeading>
              <CryptoData>{cryptoCoin?.market_cap_rank}</CryptoData>
            </CryptoDataSpan>
            <CryptoDataSpan>
              <CryptoHeading>Current Price : </CryptoHeading>
              <CryptoData>
                £
                {numberWithCommas(
                  cryptoCoin?.market_data.current_price[currency.toLowerCase()]
                )}
              </CryptoData>
            </CryptoDataSpan>
            <CryptoDataSpan>
              <CryptoHeading>24h Change : </CryptoHeading>
              <div style={{ display: "flex" }}>
                <CryptoData
                  style={{
                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                  }}
                >
                  {profit && "+"}
                  {cryptoCoin.market_data.price_change_percentage_24h != null
                    ? cryptoCoin.market_data.price_change_percentage_24h.toFixed(
                        2
                      )
                    : "---"}
                  %
                </CryptoData>
                <CryptoData
                  style={{
                    color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                  }}
                >
                  {profit && "+"}
                  {cryptoCoin.market_data.price_change_24h_in_currency != null
                    ? cryptoCoin.market_data.price_change_24h_in_currency[
                        currency.toLowerCase()
                      ].toFixed(2)
                    : "---"}
                  £
                </CryptoData>
              </div>
            </CryptoDataSpan>
            <CryptoDataSpan>
              <CryptoHeading>Market Cap : </CryptoHeading>
              <CryptoData>
                £
                {numberWithCommas(
                  cryptoCoin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}{" "}
                M
              </CryptoData>
            </CryptoDataSpan>
          </CryptoDataWrapper>
          <Button onClick={() => setCryptoInfo(false)}>
            BACK <IoIcons.IoMdReturnLeft />
          </Button>
        </>
      )}
    </InfoCointainer>
  );
};

export default DashInfo;
