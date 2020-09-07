import React, { useState, useEffect, useReducer } from 'react'
import themes from './utils/theme'
import { Application, Spinner } from 'react-rainbow-components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchReducer, fetchHits } from './utils/services'
import AppRoutes from './utils/routes'
import Layout from './components/atom/layout'
import SearchInput from './components/atom/input'
import Articles from './components/particle/articles'
import './App.css'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  const [{ articles, hasError, isLoading }, dispatch] = useReducer(
    fetchReducer,
    {
      articles: [],
      isLoading: true,
      hasError: false,
    }
  )

  const [query, setQuery] = useState('new york')

  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source()
    const debouncedFetchHits = debounce(
      () => fetchHits(query, dispatch, token),
      500
    )
    debouncedFetchHits()
    return () => cancel('No longer latest query') || debouncedFetchHits.cancel()
  }, [query])

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
    <div className="App">
      <Application
        theme={themes[theme]}
        className="rainbow-align-content_center"
      >
        <Router>
          <Layout onSwitchTheme={toggleTheme} theme={theme}>
            <Link to={`/article`}>menuju artikel</Link>
            <AppRoutes />
            <SearchInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {hasError && <div>Something went wrong ...</div>}
            {isLoading ? <Spinner /> : <Articles articles={articles} />}
          </Layout>
        </Router>
      </Application>
    </div>
  )
}

export default App
