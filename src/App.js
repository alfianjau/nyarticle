import React, { useState, useEffect, useReducer } from 'react'
import themes from './utils/theme'
import { Application } from 'react-rainbow-components'
import { BrowserRouter as Router } from 'react-router-dom'
// import { search } from './utils/api'
import axios from 'axios'
import AppRoutes from './utils/routes'
import Layout from './components/atom/layout'
import SearchInput from './components/atom/input'
import Articles from './components/particle/articles'
import './App.css'

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        articles: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    default:
      throw new Error()
  }
}

async function fetchHits(query, dispatch) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=true&facet_fields=type_of_material&facet_filter=true&fq=News&q=${query}&sort=relevance&api-key=${process.env.REACT_APP_NY_API_KEY}`
    )
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data.response.docs })
  } catch (err) {
    dispatch({ type: 'FETCH_FAILURE' })
  }
}

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
    fetchHits(query, dispatch)
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
        className="rainbow-p-vertical_xx-large rainbow-align-content_center"
      >
        <Router>
          <Layout onSwitchTheme={toggleTheme} theme={theme}>
            <SearchInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <AppRoutes />
            {hasError && <div>Something went wrong ...</div>}
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <Articles articles={articles} />
            )}
          </Layout>
        </Router>
      </Application>
    </div>
  )
}

export default App
