import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main.js';
import Admin from './pages/Admin.js';
import EstoquesMaq from './pages/EstoquesMaq.js';
import PCs from './pages/PCs.js';
import Pro_Dash from './pages/Pro_Dash.js';


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