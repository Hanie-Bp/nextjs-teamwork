"use client";

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";

const CardComponent = dynamic(() => import("./CardComponent"), {
  loading: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  ),
});

const Cards = ({ data }) => {
  const searchParams = useSearchParams();

  const sortedData = data?.sort((a, b) => {
    const option = searchParams.get("FilterBy") || "newer";
    if (option === "newer")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (option === "older")
      return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const finalData = sortedData?.filter((each) => {
    const searchedText = searchParams.get("search");
    if (!searchedText) return each;
    if (each.title.toLowerCase().includes(searchedText.toLowerCase()))
      return each;
  });

  return (
    <Box sx={{ marginBottom: "7rem", marginTop: "2.5rem" }}>
      {finalData?.map((q) => (
        <CardComponent key={q._id} question={q} />
      ))}
    </Box>
  );
};

export default Cards;
