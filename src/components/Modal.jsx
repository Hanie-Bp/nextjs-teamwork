// import React from 'react';
// import { Modal, Box, Typography, Button } from '@mui/material';


// const ConfirmModal = ({ open, onClose, onConfirm, title, description }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-title"
//       aria-describedby="modal-description"
//     >
//       <Box sx={{ ...style, width: 400 }}>
//         <Typography id="modal-title" variant="h6" component="h2">
//           Are You Sure ?
//         </Typography>
        
//          {/* <Typography id="modal-description" sx={{ mt: 2 }}>
//            Title: <strong>{title}</strong>
        
//          </Typography>
//          <Typography id="modal-description" sx={{ mt: 2 }}>
//            Are you sure you want to submit the question: <strong>{description}</strong>?
//          </Typography> */}
//         <Button onClick={onConfirm} color="primary" variant="contained" sx={{ mt: 2 }}>
//           Yes
//         </Button>
//         <Button onClick={onClose} color="secondary" variant="outlined" sx={{ mt: 2, ml: 2 }}>
//           Cancel
//         </Button>
//       </Box>
//     </Modal>
//   );
// };

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
// };

// export default ConfirmModal;





import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box } from "@mui/material";

const ConfirmationModal = ({ open, onClose, onConfirm, title, message }) => {
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
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Yes
        </Button>
      </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmationModal;

