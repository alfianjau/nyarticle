import React, { useState, useEffect, useReducer, useContext } from 'react'
import { Spinner } from 'react-rainbow-components'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
import { StoreContext } from '../../utils/store'
import debounce from 'lodash.debounce'
import axios from 'axios'
import { fetchReducer, fetchHits } from '../../utils/services'
import SearchInput from '../../components/atom/input'
import Articles from '../../components/particle/articles'

function Home() {
  const { subject } = useContext(StoreContext)

  const [{ articles, hasError, isLoading }, dispatch] = useReducer(
    fetchReducer,
    {
      articles: [],
      isLoading: true,
      hasError: false,
    }
  )

  const [query, setQuery] = useState(subject[0])

  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source()
    const debouncedFetchHits = debounce(
      () => fetchHits(query, dispatch, token),
      500
    )
    debouncedFetchHits()
    return () => cancel('No longer latest query') || debouncedFetchHits.cancel()
  }, [query, subject])

  return (
    <div>
      <SearchInput
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {hasError && <div>Something went wrong ...</div>}
      {isLoading ? <Spinner /> : <Articles articles={articles} />}
    </div>
  )
}

export default Home
