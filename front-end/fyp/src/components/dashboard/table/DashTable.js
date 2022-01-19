import { Pagination, TableBody, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoList } from "../../../config/chart/api";
import { ContainerSidebar } from "../../../styles/dashboard/Global";

const DashTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const currency = "GBP";

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CryptoList(currency));
    setCoins(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <>
      <ContainerSidebar>
        <TableBody style={{ marginTop: "30px" }}>
          {coins.slice((page - 1) * 5, (page - 1) * 5 + 5).map((row) => {
            return (
              <TableRow onClick={() => console.log(row.id)} key={row.name}>
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
                  <div
                    style={{
                      display: "flex",
                      textAlign: "center",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        textTransform: "uppercase",
                        marginTop: "8px",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "rgba(36,44,92)",
                      }}
                    >
                      {row.name}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <Pagination
          count={(coins.length / 5).toFixed(0)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          size="small"
          defaultPage={1}
          siblingCount={0}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </ContainerSidebar>
    </>
  );
};

export default DashTable;
