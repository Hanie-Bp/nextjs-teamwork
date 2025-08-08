import { Typography, Box } from "@mui/material";
import SearchInput from "@/components/SearchInput";
import Cards from "@/components/Cards";
import { getData } from "@/utils/actions";
import FilterCards from "@/components/FilterCards";

export const metadata = {
  title: "Questions",
  description: "Questions page",
};

// Force dynamic rendering to prevent build-time issues
export const dynamic = "force-dynamic";

const page = async () => {
  let fetchedData = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    fetchedData = await getData(`${baseUrl}/api/v1/questions`, ["questions"]);
  } catch (error) {
    console.error("Error fetching questions:", error);
    // Return empty array for build time
    fetchedData = [];
  }

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
