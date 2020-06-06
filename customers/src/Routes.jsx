import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Customers from './pages/Customers';

function Routes() {
  return (
    <Switch>
      <Route exact path="/customers" component={Customers} />
    </Switch>
  );
};

export default Routes;
