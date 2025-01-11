import React from "react";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { ThemeProvider } from "@/themeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>
            <Box
              sx={{
                px: {
                  xs: "20px",
                  sm: "60px",
                  md: "190px",
                  lg: "300px",
                },
                mt: "70px",
              }}
            >
              {children}
            </Box>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
