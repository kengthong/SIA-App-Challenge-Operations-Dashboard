import React from 'react';
import { Badge } from 'antd';

const EventStatus = ({status}) => {
  console.log(status)
  switch(status){
    
    case "registered":
      return (
        <div>
          <Badge status="warning" />Registered
        </div>
      )

    case "loading":
      return (
        <div>
          <Badge status="processing" />loading
        </div>
      )

    case "completed":
      return (
        <div>
          <Badge status="success" />Completed
        </div>
      )

  }
}

export default EventStatus;
