import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'

describe('Home component test', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  test('renders label', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Type a subject to find/i)
    expect(linkElement).toBeInTheDocument()
  })
})
