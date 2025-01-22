"use client";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/images/Animation - 1737531640713.json"; 
import { Box, Typography } from "@mui/material";

const Loading = () => {
 
  const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", 
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundColor: "#f5f5f5",
      }}
    >
      
      <Box sx={{ width: "300px", height: "300px" }}>
        <Lottie options={defaultOptions} />
      </Box>

     
      <Typography variant="h6" sx={{ marginTop: 2 }}>
       Just give us a second.
      </Typography>
    </Box>
  );
};

export default Loading;
