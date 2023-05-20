import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { defaultTheme } from './styles/theme/defaultTheme.ts'
import { Router } from './routes/Router.tsx'
import { CartContextProvider } from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router/>
        <GlobalStyle/>
        <App />
      </CartContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
