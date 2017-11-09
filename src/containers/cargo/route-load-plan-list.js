import React from 'react';

import RouteLoadPlanlist from '../../components/cargo-sense/route-load-plan-list.js';

class RouteLoadPlanlistPage extends React.Component {
  render() {

    const { flight_id, route_id, criteria } = this.props.match.params;
    return(
      <div>
        <RouteLoadPlanlist flight_id={flight_id} route_id={route_id} criteria={criteria}/>
        {console.log(flight_id)}

        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default RouteLoadPlanlistPage;


// [
//   {
//     date: "the date",
//     count: 3
//   },
//   {
//     date: "the date 2",
//     count: 2
//   },
//   {
//     date: "the date 2",
//     count: 2
//   },
// ]
