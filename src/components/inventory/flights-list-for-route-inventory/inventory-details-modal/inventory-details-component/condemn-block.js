import React from 'react';
import { Card, Progress } from 'antd';

const CondemnBlock = (condemned_percentage) => {
  return(
    <Card title="Condemned (%)">
      {console.log(condemned_percentage.condemned_percentage)}
      <Progress type="circle" percent={condemned_percentage.condemned_percentage} />
    </Card>
  )
}

export default CondemnBlock;
