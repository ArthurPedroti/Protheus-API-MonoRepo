import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import './Pro_Dash.css';

import api from '../services/api';

export default function Pro_Dash() {
  const [productNumber, setProductNumber] = useState('');
  const [almoxarifados, setAlmoxarifados] = useState([]);
  const [supermecados, setSupermercados] = useState([]);
  const [quebrados, setQuebrados] = useState([]);
  const [pos, setPos] = useState([]);
  const [vix, setVix] = useState([]);
  const [stockWarehouse06, setStockWarehouse06] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [PCs, setPCs] = useState([]);
  const [SCs, setSCs] = useState([]);
  const [EMPs, setEMPs] = useState([]);
  const [OUs, setOUs] = useState([]);
  
  // Colocar OPs, Onde Usado e opção matriz/filial


  async function handleSubmit(e) {
    const product = productNumber.toUpperCase().trim();

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

      setQuebrados(response3.data);

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

      const stockWarehouse06Data = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: product,
          armazem: '06',
        }})
      setStockWarehouse06(stockWarehouse06Data.data);

      const productInfoResponse = await api.get('/register', {
        headers: {
          produto: product,
        }})
      setProductInfo(productInfoResponse.data);

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

      const response8 = await api.get('/emp', {
        headers: {
          filial: '0101',
          produto: product,
        }})
      
      setEMPs(response8.data);

      const response9 = await api.get('/ou', {
        headers: {
          filial: '0101',
          produto: product,
        }})
      
      setOUs(response9.data);
  }

  //submit on press Enter
  function keyPressed(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
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
          onKeyPress={keyPressed}
          onChange={e => setProductNumber(e.target.value)}  
        />
        <InputGroup.Append>
          <Button 
            variant="outline-warning"
            onClick={handleSubmit}
            type="submit"
            >Enviar</Button>
        </InputGroup.Append>
      </InputGroup>
      <Row>
          <Col>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>DESCRIÇÃO</th>
                  <th>PP</th>
                  <th>LE</th>
                </tr>
              </thead>
              <tbody>
              {productInfo.map(product => (
                <tr>
                  <td>{product.DESCRICAO}</td>
                  <td>{product.PP}</td>
                  <td>{product.LE}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive striped bordered hover>
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
            <Table responsive striped bordered hover>
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
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>ARMAZEM 06</th>
                </tr>
              </thead>
              <tbody>
              {stockWarehouse06.map(stockWarehouse06 => (
                <tr>
                  <td>{stockWarehouse06.SALDO}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>

          <Col>
            <Table responsive striped bordered hover>
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
            <Table responsive striped bordered hover>
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
            <Table responsive striped bordered hover>
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

        <Row>
          <Col>
          <h5>Pedidos de Compra</h5>
            <Table responsive striped bordered hover>
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
            <Table responsive striped bordered hover>
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
        <Row>
          <Col>
          <h5>Onde Usado</h5>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>EQUIPAMENTO</th>
                  <th>QTD</th>
                </tr>
              </thead>
              <tbody>
              {OUs.map(ou => (
                <tr>
                  <td>{ou.CODIGO}</td>
                  <td>{ou.QUANTIDADE}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={8}>
          <h5>Planejamento (Empenhos)</h5>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>EQUIP</th>
                  <th>OP</th>
                  <th>QTD</th>
                  <th>ARM</th>
                  <th>DATA</th>
                </tr>
              </thead>
              <tbody>
              {EMPs.map(emp => (
                <tr>
                  <td>{emp.DEC_OP}</td>
                  <td>{emp.OP}</td>
                  <td>{emp.SALDO}</td>
                  <td>{emp.ARMAZEM}</td>
                  <td>{emp.ENTREGA}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      
    </div>

  );
}