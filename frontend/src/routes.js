import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Admin from './pages/Admin';
import EstoquesMaq from './pages/EstoquesMaq';
import PCs from './pages/PCs';
import Pro_Dash from './pages/Pro_Dash';


export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/estoquemaq" component={EstoquesMaq} />
      <Route path="/pcs" component={PCs} />
      <Route path="/prodash" component={Pro_Dash} />
    </BrowserRouter>
  );
}