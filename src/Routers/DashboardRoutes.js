import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../Components/DC/DcScreen'
import { HeroesScreen } from '../Components/Heroes/HeroesScreen'
import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { Navbar } from '../UI/navbar'

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}/>
          <Route exact path="/dc" component={DcScreen}/>
          <Route exact path="/hero/:heroeId" component={HeroesScreen}/>
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  )
}
