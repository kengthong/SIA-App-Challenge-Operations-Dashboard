import React from 'react';
import { Card, Collapse, Table, Row } from 'antd';

const Panel = Collapse.Panel;

const CondemnInventory = ({props}) => {
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
    <Card title="Condemn Inventory">
      <Row>
        <span className="title">Condemn Items:</span>
      </Row>
      <Row>
        <span>  Condemn Remarks: {props.condemn_remarks} </span>
      </Row>

      <Row>
        <Collapse >
          <Panel header="Items: " key="1">
            <Row>
              Fork: {(props.condemned_tally.Fork)? props.condemned_tally.Fork: '0'}
            </Row>
            <Row>
              Curry: {(props.condemned_tally.Curry)? props.condemned_tally.Curry: '0'}
            </Row>
            <Row>
              Pasta: {(props.condemned_tally.Pasta)? props.condemned_tally.Pasta: '0'}
            </Row>
            <Row>
              Spoon: {(props.condemned_tally.Spoon)? props.condemned_tally.Spoon: '0'}
            </Row>
            <Row>
              Chicken: {(props.condemned_tally.Chicken)? props.condemned_tally.Chicken: '0'}
            </Row>
            <Row>
              Wine Glass: {(props.condemned_tally.Wine_Glass)? props.condemned_tally.Wine_Glass: '0'}
            </Row>
          </Panel>
        </Collapse>
      </Row>


    </Card>
  )
}

export default CondemnInventory;
