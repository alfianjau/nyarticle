import React from 'react'
import PropTypes from 'prop-types'
import { MainWrapper, ChildrenWrapper } from './styled'
import Header from '../header'
import { ReactComponent as Dots } from '../../../dots.svg'

const Layout = ({ children, onSwitchTheme, theme }) => (
  <>
    <MainWrapper>
      <Dots className="App-dots App-dots--right" />
      <Dots className="App-dots App-dots--left" />
      <Header onSwitchTheme={onSwitchTheme} theme={theme} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
  onSwitchTheme: PropTypes.func,
  theme: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  onSwitchTheme: () => {},
  theme: '',
}
