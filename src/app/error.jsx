
"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const ErrorPage = ({ error, reset }) => {
  const router = useRouter();

  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor: "#578f99", 
        color: "#721c24", 
        textAlign: "center",
        // padding: "1rem",
        // position: "absolute", 
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }}>
        We encountered an error while processing your request:
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "1rem" }}>
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
  );
};

export default ErrorPage;


