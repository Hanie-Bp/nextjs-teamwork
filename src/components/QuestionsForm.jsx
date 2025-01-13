import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import ConfirmModal from './Modal';

const QuestionForm = ({ onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
    }
  });

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleConfirm = () => {
    onSave(formData); 
    setOpenModal(false);
    reset();
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
                variant="filled"
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
                {...register("description", { required: "Description is required" })}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{  mt: 2 , mb:3 }}  
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
      />
    </>
  );
};

export default QuestionForm;
