"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const FilterCards = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function updateFilterBy(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("FilterBy", sortOrder);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
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
        onClick={() => updateFilterBy("newer")}
      >
        Newer
      </Button>
      <Button
        variant="body2"
        startIcon={<ArrowDownward />}
        sx={{ textTransform: "none" }}
        onClick={() => updateFilterBy("older")}
      >
        Older
      </Button>
    </Box>
  );
};

export default FilterCards;
