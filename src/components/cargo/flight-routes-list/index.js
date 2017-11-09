import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Icon, Layout, Menu, Row } from 'antd';
import { connect } from 'react-redux';

import { getRouteDetails, updateRouteDetails } from './actions';
import FlightRoutesTable from './flight-routes-table';
// import EditEventModal from './edit-event-modal';
import './index.css';

// import ContainerTable from './container-table';

const newEvent = {
  bgImage: {
    url: '1'
  },
  bride: {
    name: '1',
    hp: '1',
    email: '1'
  },
  dateCreated: '1',
  dateCompleted: '1',
  dateDeleted:'1',
  eventDate: '1',
  hotel: [],
  groom: {
    name: '1',
    hp: '1',
    email: '1'
  },
  images: [
    {
      type: '1',
      time: '1',
      url: '1'
    }
  ],
  name: '1',
  price: '1',
  status: 'registered',
  salesPerson: {
    name: '1',
    hp: '1',
    email: '1'
  },
  url:'1',
}

const { Sider, Content } = Layout;

class FlightRoutesList extends React.Component {

  render() {

    const { airplaneCargo, criteria } = this.props;
    return(
      <Card loading={this.state.loading}>
        <Layout style={{height:"100vh"}}>
          <Content>
            <Card title={(criteria=="cargo")? "Flight Cargo" : "Inventory"}>
              <FlightRoutesTable
                // status={selectedKeys}
                data={this.state.data}
                criteria={criteria}
                // handleCloseModal={this.handleCloseModal}
                // handleOpenModal={this.handleOpenModal}
              />

             {/* {this.renderAddNewEventModal()} */}
           </Card>
          </Content>
        </Layout>
      </Card>
    )
  }




  renderAddNewEventModal = () => {

    return (
      <div>
        {/* <EditEventModal
          closeModal={this.handleCloseModal}
          index={this.state.activeEvent}
          newModal={this.state.showModal}
          record={this.state.record}
          handleOpenModal={this.handleOpenModal}/> */}
      </div>
    )
  }

  state = {
    showModal: false,
    count: 0,
    record: false,
    loading: true
    // flightRoutesList: this.props.flightRoutesList
  }
  componentWillMount() {
    this.props.getRouteDetails()
    .then( res => {
      const data = res.action.payload.data


      // if(this.props.cargoContainerId){
      if(this.state.data != data) {
        this.setState({
          data,
          loading:false,
          // activeCargoContainer: flight.cargoContainers.filter( cargoContainer => cargoContainer.id === this.props.cargoContainerId )[0]
        })
      }

        // this.props.updateRouteDetails(flightRoutesList)
      // } else {
      //   this.setState({
      //     cargoContainers: this.props.airplaneCargo.flights[0].cargoContainers,
      //     flightData: flight,
      //     loading:false
      //   })
      // }

    })
    .catch( err => console.log(err) );

  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (record, index) => {
    this.setState({
      showModal: true,
      record,
      activeEvent: index
    })
  }
}

export default connect(
  state => ({
    flightRoutesList: state.flightRoutesList
  }),
  dispatch => ({
    getRouteDetails: () => dispatch(getRouteDetails()),
    // updateRouteDetails: (flightRoutesList) => dispatch(updateRouteDetails(flightRoutesList))
  })
)(FlightRoutesList);
