import React from 'react';

import InventoryFacilities from '../../components/inventory-facilities';

class InventoryFacilitiesPage extends React.Component {
  render() {

    const { criteria } = this.props.match.params;
    console.log(this.props)
    return(
      <div>
        <InventoryFacilities criteria="facilities" />
        {/* <ContainersTable /> */}
      </div>
    )
  }
}
export default InventoryFacilitiesPage;
