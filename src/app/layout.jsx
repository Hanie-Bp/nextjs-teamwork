"use client";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/Header";

export default function RootLayout({ children }) {

  const [mode, setMode] = useState("light");

  const toggleTheme = () => {

    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            margin: 0,
          }}
        >
          <Header toggleTheme={toggleTheme} mode={mode} />
          <main style={{ flex: 1 }}>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
