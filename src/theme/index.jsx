import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Raleway from '../assets/fonts/Raleway.ttf'
import AmaticSC from '../assets/fonts/AmaticSC.ttf'

const configTheme = {
  pallete: {
    primary: { main: '#00705D' },
    secondary: { main: '#00DDBD' }
  },
  typography: {
    fontFamily: ['Raleway', 'serif'].join(','),
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Raleway}) format('truetype');
        }
        @font-face {
          font-family: 'AmaticSC';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${AmaticSC}) format('truetype');
        }
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
