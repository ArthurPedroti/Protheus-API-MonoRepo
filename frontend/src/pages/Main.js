import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <div className="login-container">
      <form>
        <h1>AGF</h1>
        <Link to="/estoquemaq">
          <button type="button">Estoque de Máquinas</button>
        </Link>
        <Link to="/pcs">
          <button type="button">Pedidos de Compras</button>
        </Link>
        <Link to="/prodash">
          <button type="button">Produtos</button>
        </Link>
      </form>
    </div>
  );
}