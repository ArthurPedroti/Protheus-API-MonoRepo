import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './EstoqueMaq.css';

import api from '../services/api';

export default function EstoquesMaq() {
  const [estoques, setEstoques] = useState([]);

  useEffect(() => {
    async function loadEstoques() {
      const response = await api.get('/estoques', {
        headers: {
          filial: '0101,0102',
          grupo: '0500,0510,0520,0530,0540,0550,0560,0570',
        }})
      
      setEstoques(response.data);
    }
    loadEstoques();
  })
  
  return (
  
  <div className="main-container">
    <h1>Estoque de Máquinas</h1>
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>FILIAL</th>
          <th>CÓDIGO</th>
          <th>SALDO</th>
          <th>ARMAZEM</th>
        </tr>
      </thead>
       
      <tbody>
      {estoques.map(estoque => (
        <tr>
          <td>{estoque.FILIAL}</td>
          <td>{estoque.PRODUTO}</td>
          <td>{estoque.SALDO}</td>
          <td>{estoque.ARMAZEM}</td>
        </tr>
      ))}
      </tbody>
    </Table> 
  </div>
  
  );
}