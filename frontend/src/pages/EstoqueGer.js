import React, { useEffect, useState } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import './EstoqueMaq.css';

import api from '../services/api';

export default function EstoquesGer() {
  const [estoques, setEstoques] = useState([]);
  const [gs125_01, setGS125_01] = useState([]);
  const [gs165_01, setGS165_01] = useState([]);
  const [gs230_01, setGS230_01] = useState([]);
  const [gs260_01, setGS260_01] = useState([]);
  const [gs125A_01, setGS125A_01] = useState([]);
  const [gs165A_01, setGS165A_01] = useState([]);
  const [gs230A_01, setGS230A_01] = useState([]);
  const [gs260A_01, setGS260A_01] = useState([]);

  useEffect(() => {
    async function loadEstoques() {

      const response = await api.get('/estoques', {
        headers: {
          produto: "GS125', 'GS165', 'GS230', 'GS260",
        }})
      setEstoques(response.data);

        //motores
      const response1 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: '9900001327',
          armazem: '01',
        }})
      setGS125_01(response1.data);

      const response2 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: '9900000777',
          armazem: '01',
        }})
      setGS165_01(response2.data);

      const response3 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: '9900000778',
          armazem: '01',
        }})
      setGS230_01(response3.data);

      const response4 = await api.get('/estoques', {
        headers: {
          filial: '0101',
          produto: '9900001100',
          armazem: '01',
        }})
      setGS260_01(response4.data);

        //alternadores

        const response5 = await api.get('/estoques', {
          headers: {
            filial: '0101',
            produto: '9900001335',
            armazem: '01',
          }})
        setGS125A_01(response5.data);

        const response6 = await api.get('/estoques', {
          headers: {
            filial: '0101',
            produto: '9900000786',
            armazem: '01',
          }})
        setGS165A_01(response6.data);

        const response7 = await api.get('/estoques', {
          headers: {
            filial: '0101',
            produto: '9900000821',
            armazem: '01',
          }})
        setGS230A_01(response7.data);

        const response8 = await api.get('/estoques', {
          headers: {
            filial: '0101',
            produto: '9900001101',
            armazem: '01',
          }})
        setGS260A_01(response8.data);

    }
    loadEstoques();
  })
  
  return (
  
  <div className="main-container">
    <h1>Estoque de Geradores</h1>
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

    <Row>
      <Col>
      <h5>ESTOQUE MOTORES</h5>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>GERADOR</th>
              <th>CÓDIGO</th>
              <th>SALDO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GS125</td>
              <td>9900001327</td>
              {gs125_01.map(gs125 => (
              <td>{gs125.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS165</td>
              <td>9900000777</td>
              {gs165_01.map(gs165 => (
              <td>{gs165.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS230</td>
              <td>9900000778</td>
              {gs230_01.map(gs230 => (
              <td>{gs230.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS260</td>
              <td>9900001100</td>
              {gs260_01.map(gs260 => (
              <td>{gs260.SALDO}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>

    <Row>
      <Col>
      <h5>ESTOQUE ALTERNADORES</h5>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>GERADOR</th>
              <th>CÓDIGO</th>
              <th>SALDO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GS125</td>
              <td>9900001335</td>
              {gs125A_01.map(gs125 => (
              <td>{gs125.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS165</td>
              <td>9900000786</td>
              {gs165A_01.map(gs165 => (
              <td>{gs165.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS230</td>
              <td>9900000821</td>
              {gs230A_01.map(gs230 => (
              <td>{gs230.SALDO}</td>
              ))}
            </tr>
            <tr>
              <td>GS260</td>
              <td>9900001101</td>
              {gs260A_01.map(gs260 => (
              <td>{gs260.SALDO}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>

  </div>
  
  );
}