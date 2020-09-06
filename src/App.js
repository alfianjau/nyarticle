import React, { useState, useCallback } from 'react'
import themes from './utils/theme'
import { Application, Button } from 'react-rainbow-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { search } from './utils/api'
import AppRoutes from './utils/routes'
import Layout from './components/atom/layout'
import SearchInput from './components/atom/input'
import Articles from './components/particle/articles'
import './App.css'

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )
  const [appState, setAppState] = useState({
    loading: false,
    articles: null,
    value: '',
  })

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

  async function searchTitle(val) {
    setAppState({ loading: true })
    const res = await search(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=true&facet_fields=type_of_material&facet_filter=true&fq=News&q=${val}&sort=newest&api-key=${process.env.REACT_APP_NY_API_KEY}`
    )
    const articles = res

    setAppState({ articles })
  }

  const onChangeHandler = async (e) => {
    searchTitle(e.target.value)
    setAppState({ value: e.target.value })
  }

  /* const renderArticles = useCallback(() => {
    let tempArticles = <h1>There's no articles</h1>
    if (appState.articles) {
      tempArticles = <Articles articles={appState.articles} />
    } else {
    }
    return tempArticles
  }, [appState.articles]) */

  return (
    <div className="App">
      <Application
        theme={themes[theme]}
        className="rainbow-p-vertical_xx-large rainbow-align-content_center"
      >
        <Router>
          <Layout onSwitchTheme={toggleTheme} theme={theme}>
            <SearchInput onChange={(e) => onChangeHandler(e)} />
            <AppRoutes />
            <Articles articles={appState.articles} />
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
