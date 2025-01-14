"use client";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AnswersCard from "./AnswersCard";
import { useThemeContext } from "@/themeContext";

function Answers({ title, description, answers, mode }) {
  const { isDarkMode } = useThemeContext();
  return (
    <Stack spacing={4} marginTop={"15%"} marginBottom={"3rem"}>
      <Box borderBottom={"1px solid #d6d6d6"} paddingY={"3px"}>
        <Typography variant="h3" marginBottom={"1rem"}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>

      <Box marginBottom={"20px"}>
        <Typography variant="h6" marginBottom={"1rem"}>
          Answers:
        </Typography>

        <Stack spacing={3} divider={<Divider />}>
          {answers?.map((item) => (
            <AnswersCard key={item.id} answerDesc={item.AnswerDesc} />
          ))}
        </Stack>

        <TextField
          id="filled-basic"
          variant="filled"
          placeholder="write your answer..."
          fullWidth
          multiline
          minRows={3}
          sx={{
            marginTop: "1rem",
          }}
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: `${isDarkMode ? "#0E4A84" : "primary"}`,
        }}
      >
        submit
      </Button>
    </Stack>
  );
}

export default Answers;
