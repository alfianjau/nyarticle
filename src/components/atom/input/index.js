import React from 'react'
import { Input } from 'react-rainbow-components'

const SearchInput = (props) => (
  <Input
    label="Type a subject to find"
    placeholder="Input with inline help"
    className="App-input rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    {...props}
  />
)

export default SearchInput
