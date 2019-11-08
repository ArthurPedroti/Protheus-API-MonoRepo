import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import './PCs.css';

import api from '../services/api';

export default function PCs() {
  const [pcNumber, setpcNumber] = useState('');
  const [PCs, setPCs] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const pc = pcNumber.trim();
      const response = await api.get('/pcs', {
        headers: {
          filial: '0101',
          pc: pc,
        }})
      
      setPCs(response.data);
  }


  
  return (

    <div className="main-container">
      <h1>Pedidos de Compra</h1>
      <InputGroup className="mb-3" onSubmit={handleSubmit}>
        <FormControl
          placeholder="Pedido de Compra"
          aria-label="Pedido de Compra"
          aria-describedby="basic-addon2"
          value={pcNumber}
          onChange={e => setpcNumber(e.target.value)}  
        />
        <InputGroup.Append>
          <Button 
            onClick={handleSubmit}
            type="submit"
            variant="outline-warning"
            >Enviar</Button>
        </InputGroup.Append>
      </InputGroup>

      <Table rresponsive striped bordered hover>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRODUTO</th>
            <th>DESCRIÇÃO</th>
            <th>UM</th>
            <th>QTD</th>
            <th>QTD_ENT</th>
            <th>PREÇO</th>
            <th>FORN</th>
            <th>DESC_FORN</th>
          </tr>
        </thead>
        <tbody>
        {PCs.map(pcs => (
          <tr>
            <td>{pcs.ITEM}</td>
            <td>{pcs.PRODUTO}</td>
            <td>{pcs.DESCRICAO}</td>
            <td>{pcs.UM}</td>
            <td>{pcs.QTD}</td>
            <td>{pcs.QTD_ENT}</td>
            <td>R${pcs.PRECO}</td>
            <td>{pcs.FORN}</td>
            <td>{pcs.DESC_FORN}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      
    </div>

  );
}