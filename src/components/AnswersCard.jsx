"use client";
import { Box, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function AnswersCard({ answerDesc, id }) {
  async function handleDelete() {}

  return (
    <Box
      sx={{
        border: "1px solid #d6d6d6",
        paddingY: "1rem",
        paddingLeft: "15px",
        borderRadius: "5px",
      }}
      position={"relative"}
    >
      <TextField
        id="outlined-basic"
        color="black"
        variant="outlined"
        defaultValue={answerDesc}
        multiline
        minRows={3}
        sx={{
          width: "90%",
        }}
      />
      <Box
        position={"absolute"}
        top={"40%"}
        right={"4%"}
        sx={{
          cursor: "pointer",
        }}
      >
        <DeleteIcon
          color="action"
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default AnswersCard;
