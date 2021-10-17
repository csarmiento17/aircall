import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <div
      style={{
        color: "primary",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <CircularProgress />,
    </div>
  );
};

export default Spinner;
