import React from "react";
import { Box, Typography } from "@mui/material";

export default function FancyLoading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "120px",
          height: "120px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "8px solid transparent",
            borderTop: "8px solid #ff6ec7",
            borderRadius: "50%",
            animation: "spin 1.5s linear infinite",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "60%",
            height: "60%",
            border: "6px solid transparent",
            borderBottom: "6px solid #6e45e2",
            borderRadius: "50%",
            animation: "spin-reverse 1s linear infinite",
          }}
        />

        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#ff6ec7",
            textShadow: "0 0 8px rgba(255, 110, 199, 0.7)",
          }}
        >
          Loading
        </Typography>
      </Box>

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }
        `}
      </style>
    </Box>
  );
}
