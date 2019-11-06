import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Main.css';
import logo from '../img/logo.svg';

export default function Main() {
  return (
    <div className="login-container">
      <Container className="main">
        <img src={logo} alt=""/>
        <Link to="/estoquemaq">
          <button type="button">Estoque de Máquinas</button>
        </Link>
        <Link to="/pcs">
          <button type="button">Pedidos de Compras</button>
        </Link>
        <Link to="/prodash">
          <button type="button">Produtos</button>
        </Link>
      </Container>
    </div>
  );
}