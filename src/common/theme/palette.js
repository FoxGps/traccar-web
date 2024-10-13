import {
  grey, green, amber, purple, // foxgps
} from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? grey[900] : grey[50],
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? amber[300] : amber[900]), // foxgps
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[300] : green[800]), // foxgps
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: purple[900], // foxgps ...
  },
  ignition: {
    main: green[700], // ...foxgps
  },
});
