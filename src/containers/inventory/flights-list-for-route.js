import React from 'react';

import FlightsListForRouteInventory from '../../components/inventory/flights-list-for-route-inventory';

class FlightsListInventory extends React.Component {
  render() {

    const { route_id, criteria } = this.props.match.params;
    console.log(this.props)
    return(
      <div>
        {console.log(this.props.match.params)}
        <FlightsListForRouteInventory criteria="inventory" route_id={route_id}/>

        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default FlightsListInventory;


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
