import React from "react";

function PriceCleanedUp({ coin }) {
  return (
    <>{(Math.round(coin.current_price * 100) / 100).toLocaleString("en-US")}</>
  );
}

export default PriceCleanedUp;
