// foxgps *
import { Snackbar, Alert } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePrevious } from '../../reactHelper';
import { successActions } from '../../store/success';

const SuccessHandler = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.success.messages.find(() => true));
  const previousMessage = usePrevious(message);

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={6000}
      onClose={() => dispatch(successActions.pop())}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        elevation={6}
        onClose={() => dispatch(successActions.pop())}
        severity="success"
        variant="filled"
      >
        {message || previousMessage}
      </Alert>
    </Snackbar>
  );
};

export default SuccessHandler;
