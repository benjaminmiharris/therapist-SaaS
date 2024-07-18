import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModalTest({ openModal, closeModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Details
          </Typography>
          <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
            Please fill in the form below.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Mobile"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

BasicModalTest.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
};
