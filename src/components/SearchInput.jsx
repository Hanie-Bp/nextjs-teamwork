"use client";

import { useForm } from "react-hook-form";
import { TextField, InputAdornment, Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Search query:", values.query);
  };

  console.log(errors);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "50%" }}
    >
      <TextField
        fullWidth
        required
        type="search"
        placeholder="search"
        {...register("query", { required: "Search query cannot be empty" })}
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

      {errors.query && (
        <Typography sx={{ color: "red" }}>
          {errors.query ? errors.query.message : ""}
        </Typography>
      )}
    </Box>
  );
};

export default SearchInput;
