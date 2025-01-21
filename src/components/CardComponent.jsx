"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteData } from "@/utils/actions";

const CardComponent = ({ question }) => {
  const time = new Date(question?.createdAt).toLocaleString();
  const handleDelete = async () => {
    await deleteData(`http://localhost:3000/api/v1/questions/${question._id}`, [
      "questions",
    ]);
  };
  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "12px",
        marginY: "1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", lg: "nowrap" },
        border: { lg: "none" },
      }}
    >
      <Link
        href={`/questions/${question._id}`}
        style={{ width: "100%", textDecoration: "none", color: "inherit" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            color: { dark: "white" },
            justifyContent: "space-between",
            px: 7,
            py: 1.8,
            boxShadow: {
              xs: "0px 1px 6px rgba(80, 85, 75, 0.12)",
              dark: "0px 4px 6px rgba(0, 0, 0, 0)",
              lg: "0px 2px 5px rgb(83, 77, 83)",
            },
            cursor: "pointer",
            borderRadius: "8px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontSize: "1.25rem" }}>
              {question?.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.875rem", marginTop: 1 }}
            >
              {question?.description}
            </Typography>
          </Box>
          <Box sx={{ marginTop: { xs: 5, md: 0 } }}>
            <Typography variant="body2">{time}</Typography>
          </Box>
        </Box>
      </Link>

      <Box
        sx={{
          width: { xs: "100%", lg: "5rem" },
          marginX: "1.5rem",
          marginTop: { xs: "0.75rem", lg: "0" },
          cursor: "pointer",
          padding: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: {
            xs: "0px 1px 3px rgba(15, 23, 42, 0.12)",
            lg: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
          border: { xs: "1px solid gray", lg: "none" },
          borderRadius: "12px",
          transition: "color 0.3s",
          "&:hover": {
            color: "red",
          },
        }}
        onClick={handleDelete}
      >
        <DeleteIcon />
      </Box>
    </Box>
  );
};

export default CardComponent;
