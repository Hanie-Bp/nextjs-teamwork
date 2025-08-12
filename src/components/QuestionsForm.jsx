import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import ConfirmModal from "./Modal";
import { createQuestion } from "@/utils/actions";
import { useThemeContext } from "@/themeContext";

const QuestionForm = ({ onCreateQuestion }) => {
  const { isDarkMode } = useThemeContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setFormData(data);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (onCreateQuestion) await onCreateQuestion(formData);
      else await createQuestion(formData);
      router.refresh();
    } catch (error) {
      console.error("Error saving question:", error);
    } finally {
      setLoading(false);
      setOpenModal(false);
      reset();
    }
  };

  return (
    <>
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Ask your question
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              label="Title"
              variant="filled"
              color={`${isDarkMode ? "info" : "primary"}`}
              fullWidth
              sx={{ mb: 2 }}
              {...register("title", { required: "Title is required" })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </Box>
          <Box>
            <TextField
              label="Description"
              color={`${isDarkMode ? "info" : "primary"}`}
              variant="filled"
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 2 }}
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              mb: 3,
              backgroundColor: `${isDarkMode ? "#0E4A84" : "primary"}`,
            }}
          >
            Submit
          </Button>
        </form>
      </Box>

      <ConfirmModal
        open={openModal}
        title={formData?.title}
        description={formData?.description}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        loading={loading}
      />
    </>
  );
};

export default QuestionForm;
