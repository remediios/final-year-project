import styled from "styled-components";
import { Pagination, TableBody, TableRow } from "@mui/material";

export const SideTableBody = styled(TableBody)`
  margin-top: 30px;
`;

export const SideTableRow = styled(TableRow)`
  background-color: ${({ selected }) =>
    selected ? "rgba(245, 245, 245)" : "white"};
  &:hover {
    background-color: rgba(245, 245, 245);
    transition: 0.3s all ease-in-out;
  }
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
