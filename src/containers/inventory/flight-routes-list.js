import React from 'react';

import FlightRoutesList from '../../components/inventory/flight-routes-list';

class FlightsRoutesInventory extends React.Component {
  render() {
    return(
      <div>
        <FlightRoutesList criteria="inventory"/>
        {/* <ContainersTable /> */}
      </div>

    )
  }
}

export default FlightsRoutesInventory;
