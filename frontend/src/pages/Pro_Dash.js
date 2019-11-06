import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import './Pro_Dash.css';

import api from '../services/api';

export default function Pro_Dash() {
  const [productNumber, setProductNumber] = useState('');
  const [almoxarifados, setAlmoxarifados] = useState([]);
  const [supermecados, setSupermercados] = useState([]);
  const [quebrados, setQuebrados] = useState([]);
  const [pos, setPos] = useState([]);
  const [vix, setVix] = useState([]);
  const [PCs, setPCs] = useState([]);
  const [SCs, setSCs] = useState([]);
  
  // Colocar OPs, Onde Usado e opção matriz/filial


  async function handleSubmit(e) {
    e.preventDefault();
    const product = productNumber.toUpperCase();
      const response = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: product,
          armazem: '01',
        }})
      setAlmoxarifados(response.data);

      const response2 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: product,
          armazem: '99',
        }})
      setSupermercados(response2.data);

      const response3 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: product,
          armazem: '04',
        }})

      const response4 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: product,
          armazem: '03',
        }})
      setPos(response4.data);

      const response5 = await api.get('/estoques', {
        headers: {
          filial: '0102',
          produto: product,
        }})
      setVix(response5.data);

      const response6 = await api.get('/pcs', {
        headers: {
          filial: '0101',
          produto: product,
        }})
      
      setPCs(response6.data);

      const response7 = await api.get('/scs', {
        headers: {
          filial: '0101',
          produto: product,
        }})
      
      setSCs(response7.data);
  }


  return (

    <div className="main-container">
      <h1>Produtos</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Código do Produto"
          aria-label="Código do Produto"
          aria-describedby="basic-addon2"
          value={productNumber}
          onChange={e => setProductNumber(e.target.value)}  
        />
        <InputGroup.Append>
          <Button 
            qvariant="outline-warning"
            onClick={handleSubmit}
            type="submit"
            >Enviar</Button>
        </InputGroup.Append>
      </InputGroup>

      <Container>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>ALMOXARIFADO</th>
                </tr>
              </thead>
              <tbody>
              {almoxarifados.map(almoxarifado => (
                <tr>
                  <td>{almoxarifado.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>

          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>SUPERMECADO</th>
                </tr>
              </thead>
              <tbody>
              {supermecados.map(supermecado => (
                <tr>
                  <td>{supermecado.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>

          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>QUEBRADO</th>
                </tr>
              </thead>
              <tbody>
              {quebrados.map(quebrado => (
                <tr>
                  <td>{quebrado.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
          
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>POS-VENDAS</th>
                </tr>
              </thead>
              <tbody>
              {pos.map(pos => (
                <tr>
                  <td>{pos.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>FILIAL</th>
                </tr>
              </thead>
              <tbody>
              {vix.map(vix => (
                <tr>
                  <td>{vix.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
          <h5>Pedidos de Compra</h5>
            <Table responsive>
              <thead>
                <tr>
                  <th>PC</th>
                  <th>QTD</th>
                  <th>QTD_ENT</th>
                  <th>DATA</th>
                  <th>FORN</th>
                </tr>
              </thead>
              <tbody>
              {PCs.map(pc => (
                <tr>
                  <td>{pc.PEDIDO}</td>
                  <td>{pc.QTD}</td>
                  <td>{pc.QTD_ENT}</td>
                  <td>{pc.ENTREGA}</td>
                  <td>{pc.DESC_FORN}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Solicitações de Compra</h5>
            <Table responsive>
              
              <thead>
                <tr>
                  <th>SC</th>
                  <th>QTD</th>
                  <th>QTD_ENT</th>
                  <th>DATA</th>
                  <th>OBS</th>
                </tr>
              </thead>
              <tbody>
              {SCs.map(sc => (
                <tr>
                  <td>{sc.SC}</td>
                  <td>{sc.QTD}</td>
                  <td>{sc.QTD_ENT}</td>
                  <td>{sc.ENTREGA}</td>
                  <td>{sc.OBS}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      
    </div>

  );
}