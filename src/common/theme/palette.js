import {
  grey, green, amber, teal, purple, // foxgps
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
    main: darkMode ? grey[300] : grey[500], // foxgps
  },
  geometry: {
    main: darkMode ? purple[600] : purple[800], // foxgps
  },
  status: {
    main: darkMode ? teal[600] : teal[800], // foxgps
  },
  ignition: {
    main: green[700], // foxgps
  },
});
