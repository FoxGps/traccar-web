// foxgps *

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useCatchCallback } from '../../reactHelper';
import { useTranslation } from './LocalizationProvider';
import { errorsActions } from '../../store/errors';
import { successActions } from '../../store/success';

const LockUnlockDialog = ({ open, onClose, deviceId, action }) => {
  const t = useTranslation();
  const dispatch = useDispatch();

  const handleCommand = useCatchCallback(async () => {
    const command = {
      deviceId,
      type: action === 'lock' ? 'engineStop' : 'engineResume',
      description:
        action === 'lock'
          ? t('lockVehicleCommand')
          : t('unlockVehicleCommand'),
      attributes: {}, // Include any required attributes here
    };

    try {
      const response = await fetch('/api/commands/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(command),
      });

      if (response.ok) {
        // Handle success response
        dispatch(successActions.push(t('commandSentSuccessfully')));
      } else {
        // Handle error response
        const errorText = await response.text();
        throw new Error(`${t('commandFailed')}: ${errorText}`);
      }
    } catch (error) {
      dispatch(errorsActions.push(error));
    }

    onClose();
  }, [deviceId, action, onClose, t, dispatch]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="lock-unlock-dialog-title"
    >
      <DialogTitle id="lock-unlock-dialog-title">
        {action === 'lock' ? t('lockVehicle') : t('unlockVehicle')}
      </DialogTitle>
      <DialogContent>
        <Typography>
          {action === 'lock'
            ? t('confirmLockVehicle')
            : t('confirmUnlockVehicle')}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('no')}</Button>
        <Button onClick={handleCommand} color="primary">
          {t('yes')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LockUnlockDialog;
