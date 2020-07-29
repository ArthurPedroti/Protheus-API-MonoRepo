import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main.js';
import Admin from './pages/Admin.js';
import EstoquesMaq from './pages/EstoquesMaq.js';
import PCs from './pages/PCs.js';
import SCs from './pages/SCs.js';
import Pro_Dash from './pages/Pro_Dash.js';
import EstoquesGer from './pages/EstoqueGer';
import OPsPosVendas from './pages/OPsPosVendas';
import OPsFilial from './pages/OPsFilial';
import OPsPP from './pages/OPsPP';


export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/estoquemaq" component={EstoquesMaq} />
      <Route path="/pcs" component={PCs} />
      <Route path="/scs" component={SCs} />
      <Route path="/prodash" component={Pro_Dash} />
      <Route path="/estoqueger" component={EstoquesGer} />
      <Route path="/opspos" component={OPsPosVendas} />
      <Route path="/opsfilial" component={OPsFilial} />
      <Route path="/opspp" component={OPsPP} />
    </BrowserRouter>
  );
}