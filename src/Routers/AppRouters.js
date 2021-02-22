import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../Components/Login/LoginScreen';
import { MarvelScreen } from '../Components/Marvel/MarvelScreen';
import { Navbar } from '../UI/navbar';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouters = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/login" component = {LoginScreen}/>
            <Route path = "/" component = {DashboardRoutes}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
