"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const ErrorPage = ({ error }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0bfc5",
        overflow: "hidden",
      }}
    >
     
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #ff6ec7, #e0bfc5)",
          borderRadius: "50%",
          animation: "pulse 4s infinite alternate",
          zIndex: 0,
        }}
      />
     
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#721c24",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          We encountered an error while processing your request:
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginTop: "1rem", fontStyle: "italic" }}
        >
          {error?.message || "An unexpected error occurred."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "2rem" }}
          onClick={() => router.push("/")}
        >
          Go to Homepage
        </Button>
      </Box>
     
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.7;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ErrorPage;




