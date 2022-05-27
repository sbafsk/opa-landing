import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@mui/material'
//import { BrowserRouter } from 'react-router-dom'

import { MUIThemeProvider } from './theme'
// import { Providers } from './contexts/Providers'
// import Routes from './routes'

import Home from './pages/Home'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.fonts.load('12px "Amatic SC"').then(() => {
      setTimeout(() => setLoading(false), 300)
    })
    return () => clearTimeout()
  }, [])

  return (
    <MUIThemeProvider>
      {/* <Providers>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Providers> */}
      {loading ? (
        <LinearProgress color="success" sx={{ position: 'absolute' }} />
      ) : (
        <Home />
      )}
    </MUIThemeProvider>
  )
}

export default App
