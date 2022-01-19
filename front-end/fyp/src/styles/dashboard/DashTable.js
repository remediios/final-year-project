import styled from "styled-components";
import { Pagination, TableBody, TableCell } from "@mui/material";

export const SideTableBody = styled(TableBody)`
  margin-top: 30px;
`;

export const SideTableCell = styled(TableCell)`
  display: table-caption;
  gap: 15;
  color: black;
  cursor: pointer;
  margin-left: 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const TextContent = styled.span`
  text-transform: uppercase;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(36, 44, 92);
`;

export const SidePagination = styled(Pagination)`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
