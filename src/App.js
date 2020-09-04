import React from 'react'
import theme from './utils/theme'
import { Application, Button } from 'react-rainbow-components'
import Home from './pages/home/index'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Application
        theme={theme}
        className="rainbow-p-vertical_xx-large rainbow-align-content_center"
      >
        <Home theme={theme} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Button
              label="Button Brand"
              onClick={() => alert('clicked!')}
              variant="brand"
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Application>
    </div>
  )
}

export default App
