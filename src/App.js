import React, { useState, useEffect, useReducer } from 'react'
import themes from './utils/theme'
import { Application, Spinner } from 'react-rainbow-components'
import { BrowserRouter as Router } from 'react-router-dom'
// import { search } from './utils/api'
import debounce from 'lodash.debounce'
import axios from 'axios'
import AppRoutes from './utils/routes'
import Layout from './components/atom/layout'
import SearchInput from './components/atom/input'
import Articles from './components/particle/articles'
import './App.css'

// create redux like mutation
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

// create async function for axios instance
async function fetchHits(query, dispatch, cancelToken) {
  dispatch({ type: 'FETCH_START' })
  try {
    const result = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=true&facet_fields=type_of_material&facet_filter=true&fq=News&q=${query}&sort=relevance&api-key=${process.env.REACT_APP_NY_API_KEY}`,
      { cancelToken }
    )
    dispatch({ type: 'FETCH_SUCCESS', payload: result.data.response.docs })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: 'FETCH_FAILURE' })
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
