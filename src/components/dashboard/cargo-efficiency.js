import React from 'react';
import { Progress, Row } from 'antd';


const CargoEfficiency = (percent) => {
  return(
    <div>
      <Row className="title">
        Avg Cargo Efficiency
      </Row>
      <Progress className="cargo" type="circle" percent={percent.percent}
      // format={() => 'Done'
      />
    </div>
  )
}

export default CargoEfficiency;
