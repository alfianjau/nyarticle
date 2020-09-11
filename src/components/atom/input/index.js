import React from 'react'
import { Input } from 'react-rainbow-components'

const SearchInput = (props) => (
  <Input
    label="Type a subject to find"
    placeholder="Input with inline help"
    className="App-input"
    {...props}
  />
)

export default SearchInput
