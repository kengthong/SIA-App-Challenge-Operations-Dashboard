import React from 'react';

import InventoryFacilityHistory from '../../components/inventory-facilities/inventory-facility-history';

class InventoryFacilityHistoryPage extends React.Component {
  render() {

    const { criteria, facilty_id } = this.props.match.params;
    console.log(this.props)
    return(
      <div>
        <InventoryFacilityHistory criteria="facilities" facility_id={facilty_id}/>
        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default InventoryFacilityHistoryPage;
