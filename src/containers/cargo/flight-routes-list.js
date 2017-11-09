import React from 'react';

import FlightRoutesList from '../../components/cargo/flight-routes-list';

class FlightRoutesListPage extends React.Component {
  render() {
    return(
      <div>
        <FlightRoutesList criteria="cargo"/>
        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default FlightRoutesListPage;
