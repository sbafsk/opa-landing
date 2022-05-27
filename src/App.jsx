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
    document.fonts.load('12px Raleway').then(() => setLoading(false))
  }, [])

  return (
    <MUIThemeProvider>
      {/* <Providers>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Providers> */}
      {loading ? (
        <LinearProgress color="success" />
      ) : (
        <Home onLoad={() => setLoading(false)} />
      )}
    </MUIThemeProvider>
  )
}

export default App
