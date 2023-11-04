import React from "react";
import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading({ productsLoading = null, full = null, noMargin = false}) {
  return (
    <>
      <Box
        className={!productsLoading ? "loading-box" : null}
        sx={{
          "& .MuiCircularProgress-svg": { color: "#003082" },
          textAlign: "center",
          marginTop: noMargin ? "0px" : "40px",
          height: full ? "100vh" : "",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default Loading;
