import React from 'react';
import { Card, Progress } from 'antd';

const LostBlock = ({lost_percentage}) => {
  return(
    <Card title="Lost (%)">
      <Progress type="circle" percent={lost_percentage} />
    </Card>
  )
}

export default LostBlock;
