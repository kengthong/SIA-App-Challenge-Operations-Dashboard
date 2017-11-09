import React from 'react';
import CargoShareForm from './cargo-share-form';

class CargoSharePlatform extends React.Component {
  render() {
    return(
      <div>

        <CargoShareForm />

      </div>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

}

export default CargoSharePlatform;
