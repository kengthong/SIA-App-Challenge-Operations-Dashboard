import React from 'react';
import { Progress, Row } from 'antd';


const InventoryEfficiency = (percent) => {
  return(
    <div>
      <Row className="title">
        Avg Inventory Efficiency
      </Row>
      <Progress className="inventory" type="circle" percent={percent.percent}
      // format={() => 'Done'
      />
    </div>
  )
}

export default InventoryEfficiency;
