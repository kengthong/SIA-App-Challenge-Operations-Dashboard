import React from 'react';

import FlightsListForRoute from '../../components/cargo/flights-list-for-route';

class FlightsListForRoutePage extends React.Component {
  render() {

    const { route_id, criteria } = this.props.match.params;
    return(
      <div>
        <FlightsListForRoute route_id={route_id} criteria="cargo"/>

        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default FlightsListForRoutePage;


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
