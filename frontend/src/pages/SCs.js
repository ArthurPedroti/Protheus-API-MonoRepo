import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import './SCs.css';

import api from '../services/api';

export default function SCs() {
  const [pcNumber, setpcNumber] = useState('');
  const [SCs, setSCs] = useState([]);

  async function handleSubmit(e) {
    const sc = pcNumber.trim();
      const response = await api.get('/scs', {
        headers: {
          filial: '0101',
          sc: sc,
        }})
      
      setSCs(response.data);
  }

  //submit on press Enter
  function keyPressed(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  
  return (

    <div className="main-container">
      <h1>Solicitações de Compra</h1>
      <InputGroup className="mb-3" onSubmit={handleSubmit}>
        <FormControl
          placeholder="Solicitação de Compra"
          aria-label="Solicitação de Compra"
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
            <th>ITEM</th>
            <th>PRODUTO</th>
            <th>DESCRIÇÃO</th>
            <th>DATA</th>
            <th>UM</th>
            <th>QTD</th>
            <th>EM PC</th>
            <th>OBS</th>
            <th>PC</th>
            <th>ENTREGA</th>
          </tr>
        </thead>
        <tbody>
        {SCs.map(scs => (
          <tr>
            <td>{scs.ITEM}</td>
            <td>{scs.PRODUTO}</td>
            <td>{scs.DESCRICAO}</td>
            <td>{scs.ENTREGA}</td>
            <td>{scs.UM}</td>
            <td>{scs.QTD}</td>
            <td>{scs.QTD_ENT}</td>
            <td>{scs.OBS}</td>
            <td>{scs.PC}</td>
            <td>{scs.PC_ENTREGA}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      
    </div>

  );
}