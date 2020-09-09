import React from 'react'
import { render } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('Home component test', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('renders title', () => {
    const wrapper = mount(<App />)
    const title = <h3 className="App-heading">New York Timers React app</h3>
    expect(wrapper.contains(title)).toEqual(true)
  })

  test('renders label', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Type a subject to find/i)
    expect(linkElement).toBeInTheDocument()
  })
})
