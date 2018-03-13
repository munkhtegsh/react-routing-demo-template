import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';

export default (
    <HashRouter>
    <div>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/user"> User </Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/user/:id' component={UserDetails} /> {/* "/user/:id top of the "/user" */}
        <Route path='/user' component={User} />
        <Route component={NotFound}/> {/* not found aka catch all*/}
      </Switch>
    </div>
  </HashRouter>
)