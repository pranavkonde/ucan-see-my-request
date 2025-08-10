import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
        stickyHeader: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: '4px 0',
          '&.MuiAccordion-root': {
            '&:before': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          padding: '0 12px',
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        },
        content: {
          margin: '8px 0',
          '&.Mui-expanded': {
            margin: '8px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:last-child': {
            paddingBottom: '8px',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
        stickyHeader: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: '4px 0',
          '&.MuiAccordion-root': {
            '&:before': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          padding: '0 12px',
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        },
        content: {
          margin: '8px 0',
          '&.Mui-expanded': {
            margin: '8px 0',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '8px',
          '&:last-child': {
            paddingBottom: '8px',
          },
        },
      },
    },
  },
});
