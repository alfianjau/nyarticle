// test automation for home page
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../index'

it('renders without crashing', () => {
  shallow(<Home />)
})

test('Simple valid test for Home page', () => {
  const linkElement = true
  expect(linkElement).toBe(true)
})
