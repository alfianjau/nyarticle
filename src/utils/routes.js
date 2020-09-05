import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from '../pages/home'
// import Article from '../pages/article'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/article/:id">
        Second{' '}
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default AppRoutes
