import React from 'react';
import { Badge } from 'antd';

const EfficiencyStatus = ({load}) => {
  console.log(load)
  switch(load){
    case "empty":
      return (
        <div>
          <Badge status="default" /> Empty
        </div>
      )
    case "few":
      return (
        <div>
          <Badge status="warning" /> Below 40%
        </div>
      )

    case "acceptable":
      return (
        <div>
          <Badge status="processing" />40%-80%
        </div>
      )

    case "efficient":
      return (
        <div>
          <Badge status="success" />>80% 
        </div>
      )

  }
}

export default EfficiencyStatus;
