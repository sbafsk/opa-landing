import React from 'react'
//import { BrowserRouter } from 'react-router-dom'

import { MUIThemeProvider } from './theme'
// import { Providers } from './contexts/Providers'
// import Routes from './routes'

import Home from './pages/Home'

function App() {
  return (
    <MUIThemeProvider>
      {/* <Providers>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Providers> */}
      <Home />
    </MUIThemeProvider>
  )
}

export default App
