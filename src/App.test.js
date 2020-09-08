import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders label', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Input your Subject/i)
  expect(linkElement).toBeInTheDocument()
})
