"use client";
import { useThemeContext } from "@/themeContext";
import QuestionForm from "./QuestionsForm";
import { Container, Typography, Stack, Box, Button } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
  const { isDarkMode } = useThemeContext();


  return (
    <Container sx={{ mt: 4, maxWidth: "lg", padding: 2 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
      >
        <Box>
          <Typography
            variant="h5"
            color="textSecondary"
            gutterBottom
            sx={{ fontSize: "1.2rem" }}
          >
            Find your Answers
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ whiteSpace: "nowrap", fontSize: "2rem" }}
          >
            Questions and Answers
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            gutterBottom
            sx={{
              fontSize: "0.9rem",
              lineHeight: "1.5rem",
            }}
          >
            Looking for answers? You've come to the right place! Our community
            is here to help with reliable, insightful answers to all your
            questions. Whether you're here to learn, share your expertise, or
            just browse, we're excited to have you.
          </Typography>
          <Button
            href="/questions"
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              backgroundColor: `${isDarkMode ? "#0E4A84" : "primary"}`,
            }}
          >
            Go to Questions
          </Button>
        </Box>

        <Box>
          <Image
            src="/images/Q_A_InsightsHeader_5.jpg"
            width={300}
            height={200}
            alt="Q & A Illustration"
          />
        </Box>
      </Stack>

      <QuestionForm />
    </Container>
  );
};

export default HomePage;
