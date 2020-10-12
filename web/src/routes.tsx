import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/app" exact component={OrphanagesMap} />
    </BrowserRouter>
  );
};

export default Routes;
