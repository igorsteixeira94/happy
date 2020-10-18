import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphaneges from './pages/CreateOrphaneges';
import Orphanage from './pages/Orphanage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/app" exact component={OrphanagesMap} />
      <Route path="/orphanages/:id" exact component={Orphanage} />
      <Route path="/orphanages/create" exact component={CreateOrphaneges} />
    </BrowserRouter>
  );
};

export default Routes;
