import { CircularProgress, TableCell } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoList } from "../../../config/chart/api";
import {
  SidePagination,
  SideTableBody,
  SideTableRow,
  TextContent,
  TextWrapper,
} from "../../../styles/dashboard/DashTable";
import { ContainerSidebar } from "../../../styles/dashboard/Global";

const DashTable = ({ currency, selectedCoin, setSelectedCoin }) => {
  const [coins, setCoins] = useState();
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CryptoList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    //eslint-disable-next-line
  }, [currency]);

  useEffect(() => {
    const userSelectedCrypto = localStorage.getItem("selectedCrypto");
    const userSelectedPage = localStorage.getItem("selectedPage");
    setSelectedCoin(userSelectedCrypto);
    setPage(userSelectedPage);
    //eslint-disable-next-line
  }, [selectedCoin]);

  return (
    <>
      <ContainerSidebar>
        {!coins ? (
          <CircularProgress
            style={{ color: "rgba(36, 44, 92)" }}
            size={50}
            thickness={2}
          />
        ) : (
          <>
            <SideTableBody>
              {coins.slice((page - 1) * 5, (page - 1) * 5 + 5).map((row) => {
                return (
                  <>
                    <SideTableRow
                      selected={row.id === selectedCoin ? true : false}
                      onClick={() => {
                        setSelectedCoin(row.id);
                        localStorage.setItem("selectedCrypto", row.id);
                      }}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "table-caption",
                          gap: 15,
                          color: "black",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      >
                        <img src={row?.image} alt={row.name} height="70" />
                        <TextWrapper>
                          <TextContent>{row.name}</TextContent>
                        </TextWrapper>
                      </TableCell>
                    </SideTableRow>
                  </>
                );
              })}
            </SideTableBody>
            <SidePagination
              count={(coins.length / 5).toFixed(0)}
              size="small"
              defaultPage={1}
              siblingCount={0}
              onChange={(_, value) => {
                setPage(value);
                localStorage.setItem("selectedPage", value);
              }}
            />
          </>
        )}
      </ContainerSidebar>
    </>
  );
};

export default DashTable;
