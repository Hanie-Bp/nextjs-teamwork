import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useThemeContext } from "@/themeContext";

const ConfirmationModal = ({ open, onClose, onConfirm, title, message, loading }) => {
  const { isDarkMode } = useThemeContext();

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          // maxWidth: "100%",
          // minHeight: 50,
        }}
      >
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary" disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            color={`${isDarkMode ? "info" : "primary"}`}
            disabled={loading}
          >
         {loading ? <CircularProgress size={24} /> :  "Yes" }
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmationModal;
