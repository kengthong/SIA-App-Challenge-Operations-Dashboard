import React from 'react';

import CargoShareForm from '../../components/cargo-share-form';

class CargoShareFormPage extends React.Component {
  render() {
    const { filter } = this.props.match.params;
    console.log(this.props)
    return(
      <div>
        <CargoShareForm />
      </div>
    )
  }
}

export default CargoShareFormPage;
