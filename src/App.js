import React, { useState } from 'react'
import themes from './utils/theme'
import { Application } from 'react-rainbow-components'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './utils/routes'
import Layout from './components/atom/layout'
import './App.css'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  // toggle dark and light theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Application
      theme={themes[theme]}
      className="App rainbow-align-content_center"
    >
      <Router>
        <Layout onSwitchTheme={toggleTheme} theme={theme}>
          <AppRoutes />
        </Layout>
      </Router>
    </Application>
  )
}

export default App
