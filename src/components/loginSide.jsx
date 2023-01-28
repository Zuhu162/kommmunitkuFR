import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bigStar from "../assets/bigStar.png";
import palette from "./palette";

const LoginSide = () => {
  return (
    <div>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          minHeight: "80vh",
          textAlign: "center",
          fontWeight: 700,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={bigStar}></img>
        <br />
        <Typography sx={{ color: palette.red, fontSize: "36px" }} variant="p">
          KommunitKu
        </Typography>
        <br />
        <Typography sx={{ opacity: "70%" }} variant="p">
          MySriGading
        </Typography>
      </Box>
    </div>
  );
};

export default LoginSide;
