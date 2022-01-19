import React from "react";
import { Button } from "../../../styles/dashboard/DashChart";

const DashChartButtons = ({ children, selected, onClick }) => {
  return (
    <Button onClick={onClick} selected={selected}>
      {children}
    </Button>
  );
};

export default DashChartButtons;
