import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@Pages/Home';
import Login from '@Pages/Login';
import Signup from '@Pages/Signup';
import Profile from '@Pages/Profile';
import ProfileForm from '@Pages/ProfileForm';
import Deposit from '@Pages/Deposit';
import Banks from '@Pages/Banks';
import TransactionsLogs from '@Pages/TransactionsLogs';
import UserQueries from '@Pages/UserQueries';

const RouterComp = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/edit-profile" component={ProfileForm} />
      <Route path="/deposits" component={Deposit} />
      <Route path="/banks" component={Banks} />
      <Route path="/transactions" component={TransactionsLogs} />
      <Route path="/user-queries" component={UserQueries} />
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </Router>
);

export default RouterComp;
