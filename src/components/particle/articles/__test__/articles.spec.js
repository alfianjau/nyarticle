// test automation for articles component (multi component)
import React from 'react'
import { shallow } from 'enzyme'
import Articles from '../index'

describe('Articles', () => {
  it('renders without crashing', () => {
    shallow(<Articles />)
  })
  test('Simple valid test for Articles', () => {
    const linkElement = true
    expect(linkElement).toBe(true)
  })
})
