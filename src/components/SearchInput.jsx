"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(e) {
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) params.set("search", e.target.value);
    else params.delete("search");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <TextField
      type="search"
      placeholder="search"
      sx={{ width: "50%" }}
      fullWidth
      onInput={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        sx: {
          height: "38px",
          padding: "4px 8px",
        },
      }}
    />
  );
};

export default SearchInput;
