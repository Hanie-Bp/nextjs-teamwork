import React, { Suspense } from "react";
import { Button, Typography, Box, CircularProgress } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import SearchInput from "@/components/SearchInput";
import Cards from "@/components/Cards";

export const metadata = {
  title: "Questions",
  description: "Questions page",
};

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
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <CircularProgress />
            </div>
          }
        >
          <Cards />
        </Suspense>
      </div>
    </>
  );
};

export default page;

// import React, { useEffect, useState } from 'react';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const QuestionsPage = () => {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {

//     const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
//     setQuestions(storedQuestions);
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Submitted Questions
//       </Typography>
//       <List>
//         {questions.map((item, index) => (
//           <ListItem key={index}>
//             <ListItemText
//               primary={`Title: ${item.title}`}
//               secondary={`Description: ${item.description}`}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default QuestionsPage;
