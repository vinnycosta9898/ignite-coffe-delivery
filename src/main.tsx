import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { defaultTheme } from './styles/theme/defaultTheme.ts'
import { Router } from './routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
