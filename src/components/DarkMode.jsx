"use client";
import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import IconButton from "@mui/material/IconButton";
import { useThemeContext } from "@/themeContext";

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <IconButton onClick={handleToggle} sx={{ mt: 2 }}>
      {isDarkMode ? (
        <WbSunnyIcon sx={{ fontSize: 25, color: "white" }} />
      ) : (
        <BedtimeIcon sx={{ fontSize: 25, color: " grey[800]" }} />
      )}
    </IconButton>
  );
};

export default DarkMode;
