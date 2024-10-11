import React from 'react';
import { useMediaQuery, Paper, useTheme } from '@mui/material';
import LogoImage from './LogoImage';
import Image from '../resources/images/cover-1920.jpg';

const LoginLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          boxShadow: '-2px 0px 16px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          [theme.breakpoints.up('lg')]: {
            padding: 0,
          },
          backgroundImage:
            theme.palette.mode === 'dark'
              ? `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.85)), url(${Image})`
              : `url(${Image})`,
        }}
      >
        <form
          style={{
            border: '1px solid rgba(0,0,0,.125)',
            borderRadius: '0.25rem',
            boxShadow: '0 3px 15px 1px rgb(0 0 0 / 15%)',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? theme.palette.background.default
                : 'rgba(255,255,255,0.75)',
            maxWidth: theme.spacing(52),
            padding: theme.spacing(5),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {!isSmallScreen && (
            <LogoImage color={theme.palette.secondary.contrastText} />
          )}
          {children}
        </form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
