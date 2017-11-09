import React from 'react';
import { Card, Collapse, Table, Row } from 'antd';

const Panel = Collapse.Panel;

const CheckInInventory = ({props}) => {
  const columns = [
    {
      title: 'Fork',
      dataIndex: 'Fork',
    },{
      title: 'Curry',
      dataIndex: 'Curry',
    },{
      title: 'Pasta',
      dataIndex: 'Pasta',
    },{
      title: 'Spoon',
      dataIndex: 'Spoon',
    },{
      title: 'Chicken',
      dataIndex: 'Chicken',
    },{
      title: 'Wine_Glass',
      dataIndex: 'Wine_Glass',
    },
  ]
  return(
    <Card title="Check in Inventory">
      <Row>
        <span className="title">Check in by:</span> {props.check_in_by} {Date.parse(props.check_out_timing)}
      </Row>

      <Row>
        <span className="title">Remarks:</span> {props.check_in_remarks}
      </Row>

      <Row>
        <Collapse>
          <Panel header="Items: " key="1">
            <Row>
              Fork: {props.check_in_inventory.Fork}
            </Row>
            <Row>
              Curry: {props.check_in_inventory.Curry}
            </Row>
            <Row>
              Pasta: {props.check_in_inventory.Pasta}
            </Row>
            <Row>
              Spoon: {props.check_in_inventory.Spoon}
            </Row>
            <Row>
              Chicken: {props.check_in_inventory.Chicken}
            </Row>
            <Row>
              Wine Glass: {props.check_in_inventory.Wine_Glass}
            </Row>
          </Panel>
        </Collapse>
      </Row>
    </Card>
  )
}

export default CheckInInventory;
