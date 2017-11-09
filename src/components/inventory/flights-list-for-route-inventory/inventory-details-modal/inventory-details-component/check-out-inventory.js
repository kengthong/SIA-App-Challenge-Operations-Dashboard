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
    <Card title="Check Out Inventory">
      <Row>
        <span className="title">Check in by:</span> {props.check_out_by} {Date.parse(props.check_out_timing)}
      </Row>

      <Row>
        <span className="title">Remarks:</span> {props.check_out_remarks}
      </Row>

      <Row>
        <Collapse >
          <Panel header="Items: " key="1">
            <Row>
              Fork: {}{(props.check_out_inventory.Fork)? props.check_out_inventory.Fork: '0'}
            </Row>
            <Row>
              Curry: {(props.check_out_inventory.Curry)? props.check_out_inventory.Curry: '0'}
            </Row>
            <Row>
              Pasta: {(props.check_out_inventory.Pasta)? props.check_out_inventory.Pasta: '0'}
            </Row>
            <Row>
              Spoon: {(props.check_out_inventory.Spoon)? props.check_out_inventory.Spoon: '0'}
            </Row>
            <Row>
              Chicken: {(props.check_out_inventory.Chicken)? props.check_out_inventory.Chicken: '0'}
            </Row>
            <Row>
              Wine Glass: {(props.check_out_inventory.Wine_Glass)? props.check_out_inventory.Wine_Glass: '0'}
            </Row>
          </Panel>
        </Collapse>
      </Row>
    </Card>
  )
}

export default CheckInInventory;
