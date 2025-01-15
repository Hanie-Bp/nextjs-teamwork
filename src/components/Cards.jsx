import React from "react";
// import {data} from "@/utils/data"
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";
import { getData } from "@/utils/actions";

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

const Cards = async () => {
  const data = await getData("http://localhost:3000/api/v1/questions");

  return (
    <Box sx={{ marginBottom: "7rem", marginTop: "2.5rem" }}>
      {data?.map((q) => (
        <CardComponent key={q._id} question={q} />
      ))}
    </Box>
  );
};

export default Cards;
