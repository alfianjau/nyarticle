import React from 'react'

// create store provider for persisted state consumption
export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [articles, setArticles] = React.useState([])
  const [subject, setSubject] = React.useState('new york times')

  const store = {
    articles: [articles, setArticles],
    subject: [subject, setSubject],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
