import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const configTheme = {
  pallete: {
    primary: { main: '#00705D' },
    secondary: { main: '#00DDBD' }
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        .react-parallax {
          background-color: #000;
        }
        `
    }
  }
}

// To use responsive font sizes, include the following line
const theme = createTheme(configTheme)

export const MUIThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
