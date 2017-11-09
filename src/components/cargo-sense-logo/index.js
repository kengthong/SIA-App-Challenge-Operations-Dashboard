import React from 'react';
import { Col, Row } from 'antd';

import './index.css';
import cargoSense from './icons/cargo-sense.png';
import siaLogo from './icons/sia-logo.png';

const CargoSenseLogo = () => {
  return(
    <Row>
      <Row type="flex" align="space-between" className="logo-background" style={{backgroundColor: "white"}}>
        <Col span={8}>
          <img src={cargoSense} style={{position: 'absolute', width: "100px"}} />
        </Col>
        <Col span={10}>
          <img src={siaLogo} style={{position: 'absolute', width: "100px"}} />
        </Col>
      </Row>
    </Row>
  )
}

export default CargoSenseLogo;
