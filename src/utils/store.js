import React from 'react'

// create store provider for persisted state consumption
export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const teamMembersNames = ['John', 'Mary', 'Jason', 'David']

  const [articles, setArticles] = React.useState([])
  const [help, setHelp] = React.useState([])
  const [pairing, setPairing] = React.useState(teamMembersNames)

  const store = {
    articles: [articles, setArticles],
    help: [help, setHelp],
    pairing: [pairing, setPairing],
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
