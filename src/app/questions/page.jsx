import React, { Suspense } from "react";
import { Button, Typography, Box, CircularProgress } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import SearchInput from "@/components/SearchInput";
// import Cards from "@/components/Cards";

const page = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", pt: 2 }}>
          Questions
        </Typography>

        <Box
          sx={{
            width: {
              xs: "100vw",
              md: "70vw",
              lg: "100%",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchInput />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "medium", textAlign: "center" }}
          >
            Filter By:
          </Typography>

          <Button
            variant="body2"
            startIcon={<ArrowDownward />}
            sx={{ textTransform: "none" }}
          >
            Newer
          </Button>
          <Button
            variant="body2"
            startIcon={<ArrowDownward />}
            sx={{ textTransform: "none" }}
          >
            Older
          </Button>
        </Box>
      </Box>

      <div>
        <Suspense fallback={<CircularProgress />}>{/* <Cards /> */}</Suspense>
      </div>
    </>
  );
};

export default page;
