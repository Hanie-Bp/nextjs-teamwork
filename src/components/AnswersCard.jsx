"use client";
import { Box, CircularProgress, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { deleteData, patchData } from "@/utils/actions";

function AnswersCard({ answerDesc, questionId, answerId }) {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState(answerDesc);
  const [tempDesc, setTempDesc] = useState(answerDesc);

  // delete an answer
  async function handleDelete() {
    try {
      setLoading(true);
      await deleteData(
        `http://localhost:3000/api/v1/questions/${questionId}/answers/${answerId}`,
        ["questions"]
      );
      // console.log(`this ${answerId} deleted`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  //update an answer
  async function handleUpdate() {
    if (desc !== tempDesc) {
      try {
        await patchData(
          `http://localhost:3000/api/v1/questions/${questionId}/answers/${answerId}`,
          { description: tempDesc },
          ["questions"]
        );
        setDesc(tempDesc);
        // console.log(`Answer ${answerId} updated`);
      } catch (error) {
        console.log("Error updating answer:", error);
      }
    }
  }

  function handleBlur() {
    handleUpdate();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUpdate();
    }
  }

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
        value={tempDesc}
        onChange={(e) => {
          setTempDesc(e.target.value);
        }}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        multiline
        minRows={3}
        sx={{
          width: "90%",
        }}
      />
      <Box
        component="button"
        position={"absolute"}
        top={"40%"}
        right={"3%"}
        sx={{
          cursor: "pointer",
          background: "inherit",
          border: "none",
        }}
        onClick={handleDelete}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <DeleteIcon
            color="action"
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default AnswersCard;
