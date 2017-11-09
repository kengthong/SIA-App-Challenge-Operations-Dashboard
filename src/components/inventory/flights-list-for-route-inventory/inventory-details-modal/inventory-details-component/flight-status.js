import React from 'react';
import { Card, Icon, Row } from 'antd';

import airplane from './icons/airplane.png';
// import airplane from './icons/airplane.svg';
const FlightStatus = ({flight_status, airplane}) => {
  return(
    <Card style={{minHeight:"229px"}} title="Status:">
      <Row type="flex" align="center">
      {(flight_status=="Checked Out")?
        <Row className="display2 ">
          Checked Out
        </Row>
        :
        <Row className="display2 ">
          InFlight
        </Row>
      }
    </Row>
    </Card>
  )
}

export default FlightStatus;
