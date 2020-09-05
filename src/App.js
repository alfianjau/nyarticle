import React, { useState } from 'react'
import { Application, Button } from 'react-rainbow-components'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './utils/routes'
import themes from './utils/theme'
import Layout from './components/atom/layout'
import SearchInput from './components/atom/input'
import './App.css'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

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
    <div className="App">
      <Application
        theme={themes[theme]}
        className="rainbow-p-vertical_xx-large rainbow-align-content_center"
      >
        <Router>
          <Layout onSwitchTheme={toggleTheme} theme={theme}>
            <SearchInput />
            <AppRoutes />
            <Button
              label="Button Brand"
              onClick={() => alert('clicked!')}
              variant="brand"
            />
          </Layout>
        </Router>
      </Application>
    </div>
  )
}

export default App
