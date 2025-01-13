'use client'

import React, { useState } from 'react';
import QuestionForm from './QuestionsForm';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import Image from 'next/image';

const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const handleSaveQuestion = (questionData) => {
    
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    
    
    const updatedQuestions = [...storedQuestions, questionData];
    
  
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    
    
    setQuestions(updatedQuestions);
  };

  return (
    <Container sx={{ mt: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          
          <Box>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Find your Answers
            </Typography>
            <Typography variant="h2" gutterBottom>
              Questions and Answers
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Looking for answers? You've come to the right place! Our community
              is here to help with reliable, insightful answers to all your
              questions. Whether you're here to learn, share your expertise, or
              just browse, we're excited to have you.
            </Typography>
            <Button
              href="/questions"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Go to Questions
            </Button>
          </Box>

          
          <Box>
            <Image
              src="/images/Q_A_InsightsHeader_5.jpg"
              width={300}
              height={300}
              alt="Q & A Illustration"
            />
          </Box>
        </Stack>


      <QuestionForm onSave={handleSaveQuestion} />

      
    </Container>
  );
};

export default HomePage;




