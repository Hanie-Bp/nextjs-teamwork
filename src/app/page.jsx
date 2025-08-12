import HomePage from "@/components/HomePage";
import { createQuestion } from "@/utils/actions";

import { Box } from "@mui/material";

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <Box>
      <HomePage onCreateQuestion={createQuestion} />
    </Box>
  );
}
