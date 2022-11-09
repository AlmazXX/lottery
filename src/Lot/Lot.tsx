import React from "react";
import "./Lot.css";

interface LotProps {
  value: number;
}

const Lot: React.FC<LotProps> = ({ value }) => {
  return <span className="lot">{value}</span>;
};

export default Lot;