import React from 'react'
import { Input } from 'react-rainbow-components'

const SearchInput = (props) => (
  <Input
    label="Input your Subject"
    placeholder="Input with inline help"
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    {...props}
  />
)

export default SearchInput
