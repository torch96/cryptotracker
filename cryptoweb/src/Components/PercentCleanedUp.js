import React from "react";

function PercentCleanedUp({ percent }) {
  return <>{Math.round(percent * 100) / 100}</>;
}

export default PercentCleanedUp;
