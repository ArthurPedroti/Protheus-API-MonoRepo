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
        <Link to="/estoqueger">
          <button type="button">Geradores</button>
        </Link>
        <Link to="/pcs">
          <button type="button">Pedidos de Compras</button>
        </Link>
        <Link to="/prodash">
          <button type="button">Produtos</button>
        </Link>
        <Link to="/opspos">
          <button type="button">OPs para o Pós Vendas</button>
        </Link>
        <Link to="/opsfilial">
          <button type="button">OPs para a Filial</button>
        </Link>
        <Link to="/opspp">
          <button type="button">OPs por Ponto de Pedido</button>
        </Link>
      </Container>
    </div>
  );
}