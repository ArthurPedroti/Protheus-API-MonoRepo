import React, { useState, useEffect } from 'react';
import { Table, Button, InputGroup, FormControl, Badge } from 'react-bootstrap';
import './PCs.css';

import api from '../services/api';

export default function PCs() {
  const [pcNumber, setpcNumber] = useState('');
  const [PCs, setPCs] = useState([]);
  const [sumPCs, setSumPCs] = useState([]);

  async function handleSubmit(e) {
    const pc = pcNumber.trim();
      const response = await api.get('/pcs', {
        headers: {
          filial: '0101',
          pc: pc,
        }})
      
      setPCs(response.data);
  }
  
  useEffect(() => {
    const mapPCs = PCs.map(pc => pc.PRECO * (pc.QTD - pc.QTD_ENT));
    const sumPCs =
    mapPCs.length > 0 ? mapPCs.reduce((a, b) => a + b) : 0;
    setSumPCs(sumPCs)
  }, [PCs])

  //submit on press Enter
  function keyPressed(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
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
          onKeyPress={keyPressed}
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

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>APROVADO</th>
            <th>ITEM</th>
            <th>PRODUTO</th>
            <th>DESCRIÇÃO</th>
            <th>UM</th>
            <th>QTD</th>
            <th>QTD_ENT</th>
            <th>PREÇO</th>
            <th>OBS</th>
            <th>ENTREGA</th>
            <th>FORN</th>
            <th>DESC_FORN</th>
          </tr>
        </thead>
        <tbody>
        {PCs.map(pcs => (
          <tr>
            <td>{pcs.APROVADO === 'L' ?  <Badge variant="success">SIM</Badge> : <Badge variant="danger">NÃO</Badge>}</td>
            <td>{pcs.ITEM}</td>
            <td>{pcs.PRODUTO}</td>
            <td>{pcs.DESCRICAO}</td>
            <td>{pcs.UM}</td>
            <td>{pcs.QTD}</td>
            <td>{pcs.QTD_ENT}</td>
            <td>R${pcs.PRECO}</td>
            <td>{pcs.OBS}</td>
            <td>{pcs.ENTREGA}</td>
            <td>{pcs.FORN}</td>
            <td>{pcs.DESC_FORN}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      <h3>Total do pedido: {sumPCs.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}</h3>
      
    </div>

  );
}