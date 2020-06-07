import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products';

function Routes() {
  return (
    <Switch>
      <Route exact path='/products' component={Products} />
    </Switch>
  );
}

export default Routes;