import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import buildMicrofrontend from './components/buildMicrofrontend';

const CustomersMicrofrontend = buildMicrofrontend({
  host: 'http://localhost:3001',
  name: 'Customers',
  container: 'customers',
})

const ProductsMicrofrontend = buildMicrofrontend({
  host: 'http://localhost:3002',
  name: 'Products',
  container: 'products',
})

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers" component={CustomersMicrofrontend} />
      <Route exact path="/products" component={ProductsMicrofrontend} />
    </Switch>
  )
}

export default Routes;