import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import ArticleDetail from '../pages/detail'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/article/:id">
        <ArticleDetail />
      </Route>
      <Redirect to="/">back to Home</Redirect>
    </Switch>
  )
}

export default AppRoutes
