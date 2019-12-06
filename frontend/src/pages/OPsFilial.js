import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './OPs.css';

import api from '../services/api';

export default function OPsFilial() {
  const [OPs, setOPs] = useState([]);

  useEffect(() => {
    async function loadOPs() {
      const response = await api.get('/ops', {
        headers: {
          filial: '0101',
          obs: 'FILIAL',
        }})
      
      setOPs(response.data);
    }
    loadOPs();
  })
  
  return (
  
  <div className="main-container-expand">
    <h1>OPs para a Filial</h1>
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>OP</th>
          <th>CÓDIGO</th>
          <th>DESCRIÇÃO</th>
          <th>QTD</th>
          <th>DATA EMI</th>
          <th>DATA INI</th>
          <th>DATA FIM</th>
          <th>CC</th>
          <th>OBS</th>
          <th>QTD PRO</th>
        </tr>
      </thead>
       
      <tbody>
      {OPs.map(ops => (
        <tr>
          <td>{ops.OP}</td>
          <td>{ops.PRODUTO}</td>
          <td>{ops.DESCRICAO}</td>
          <td>{ops.QTD}</td>
          <td>{ops.DAT_EMI}</td>
          <td>{ops.DAT_INI}</td>
          <td>{ops.DAT_FIM}</td>
          <td>{ops.CC}</td>
          <td>{ops.OBS}</td>
          <td>{ops.QTD_PRO}</td>
        </tr>
      ))}
      </tbody>
    </Table> 
  </div>
  
  );
}