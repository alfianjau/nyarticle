import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from '../pages/home'
import ArticleDetail from '../pages/detail'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/article/:id">
        <ArticleDetail />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default AppRoutes
