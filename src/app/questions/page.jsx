import { Typography, Box } from "@mui/material";
import SearchInput from "@/components/SearchInput";
import Cards from "@/components/Cards";

export const metadata = {
  title: "Questions",
  description: "Questions page",
};

const page = async () => {
  const fetchedData = await getData("http://localhost:3000/api/v1/questions");

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
        <FilterCards />
      </Box>
      <Cards data={fetchedData} />
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
