"use client";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AnswersCard from "./AnswersCard";
import { useThemeContext } from "@/themeContext";
import { patchData, postData } from "@/utils/actions";
import { useForm } from "react-hook-form";

function Answers({ title, description, answers, id }) {
  const { isDarkMode } = useThemeContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      description: "",
    },
  });
  // console.log(answers);
  async function submit(data) {
    try {
      await postData(`http://localhost:3000/api/v1/questions/${id}`, data, [
        "questions",
      ]);
      // console.log("answer added");
      reset();
    } catch (error) {
      console.log(error);
    }
  }

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
            <AnswersCard
              key={item._id}
              answerDesc={item.description}
              questionId={id}
              answerId={item._id}
            />
          ))}
        </Stack>

        <Stack component={"form"} onSubmit={handleSubmit(submit)}>
          <TextField
            id="filled-basic"
            variant="filled"
            placeholder="write your answer..."
            fullWidth
            multiline
            minRows={3}
            sx={{
              marginY: "1rem",
            }}
            {...register("description", { required: "Answer is required!" })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: `${isDarkMode ? "#0E4A84" : "primary"}`,
            }}
            type="submit"
          >
            submit
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Answers;
