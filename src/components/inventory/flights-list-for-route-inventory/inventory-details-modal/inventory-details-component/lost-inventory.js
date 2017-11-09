import React from 'react';
import { Card, Collapse, Table, Row } from 'antd';

const Panel = Collapse.Panel;

const LostInventory = ({props}) => {
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
    <Card title="Lost Inventory">
      <Row>
        {/* <span className="title">Lost Items:</span> */}
      </Row>

      <Row>
        <Collapse>
          <Panel header="Lost Inventory: " key="1">
            <Row>
              Fork: {(props.lost_tally.Fork)? props.lost_tally.Fork: '0'}
            </Row>
            <Row>
              Curry: {(props.lost_tally.Curry)? props.lost_tally.Curry: '0'}
            </Row>
            <Row>
              Pasta: {(props.lost_tally.Pasta)? props.lost_tally.Pasta: '0'}
            </Row>
            <Row>
              Spoon: {(props.lost_tally.Spoon)? props.lost_tally.Spoon: '0'}
            </Row>
            <Row>
              Chicken: {(props.lost_tally.Chicken)? props.lost_tally.Chicken: '0'}
            </Row>
            <Row>
              Wine Glass: {(props.lost_tally.Wine_Glass)? props.lost_tally.Wine_Glass: '0'}
            </Row>
          </Panel>
        </Collapse>
      </Row>
    </Card>
  )
}

export default LostInventory;
