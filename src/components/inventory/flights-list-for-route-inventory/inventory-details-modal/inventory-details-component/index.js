import React from 'react';
import { Card, Col, Row, } from 'antd';

import CondemnInventory from './condemn-inventory';
import CheckInInventory from './check-in-inventory';
import CheckOutInventory from './check-out-inventory';
import CondemnBlock from './condemn-block';
import FlightStatus from './flight-status';
import LostBlock from './lost-block';
import LostInventory from './lost-inventory';


class InventoryDetailsComponent extends React.Component {
  render() {
    return(
      <Card loading={!this.state.data}>
        <Row type="flex" align="space-between">
          {console.log(this.state.data)}
          <Col span={7}>
            <FlightStatus
              className="inventory-modal-spacing"
              inventoryStatus="InFlight"
          />
          </Col>
          <Col span={7}>
            <CondemnBlock
              className="inventory-modal-spacing"
              condemned_percentage={`${this.state.data.condemned_percentage}`}
            />
          </Col>
          <Col span={7}>
            <LostBlock
              className="inventory-modal-spacing"
              lost_percentage={`${this.state.data.lost_percentage}`}
            />
          </Col>
        </Row>
        <Row style={{marginTop: "10px"}}>
          <CheckInInventory props={this.state.data}/>
        </Row>
        <Row>
          <CheckOutInventory props={this.state.data}/>
        </Row>

        <Row>
          <LostInventory props={this.state.data}/>
        </Row>
        <Row>
          <CondemnInventory props={this.state.data}/>
        </Row>

      </Card>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      data: false,

    }
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    })
    console.log(this.state, this.props.data)
  }
}

export default InventoryDetailsComponent;
