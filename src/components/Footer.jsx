"use client";
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {useThemeContext} from "@/themeContext";

const Footer = () => {
 const { isDarkMode} = useThemeContext();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: `${isDarkMode ? "#0E4A84" : "#1976d2"}`,
        color: "white",
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        More projects I’ve worked on:
      </Typography>
      <Link
        href="https://github.com/Hanie-Bp/nextjs-teamwork.git"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <GitHubIcon sx={{ mr: 1 }} />
        @Next Teamwork on GitHub
      </Link>
    </Box>
  );
};

export default Footer;