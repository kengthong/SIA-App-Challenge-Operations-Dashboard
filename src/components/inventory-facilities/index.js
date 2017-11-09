import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Icon, Layout, Menu, Row } from 'antd';
import { connect } from 'react-redux';

import { getFacilitiesDetails, getFacilitiesDetailsFulfilled } from './actions';
import InventoryFacilitiesTable from './inventory-facilities-table';

import './index.css';

const { Sider, Content } = Layout;

class InventoryFacilities extends React.Component {

  render() {

    // const { flightRoutesList, criteria } = this.props;
    return(
      <Card loading={!this.state.facilitiesData}>
        <Layout style={{height:"100vh"}}>
          <Content>
            <Card title={(this.props.criteria=="facilities")? "Inventory Facilities" : ''}>
              <InventoryFacilitiesTable
                data = {this.state.facilitiesData}
                // status={selectedKeys}
                // flightRoutesList={this.state.flightRoutesList}
                // criteria={criteria}
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
    loading: true,
    facilitiesData: false
    // flightRoutesList: this.props.flightRoutesList
  }
  componentWillMount() {
    this.props.getFacilitiesDetails()
    .then( res => {
      const facilitiesData = res.action.payload.data
      console.log(res)
      // if(this.props.cargoContainerId){
      if(this.state.flightRoutesList != facilitiesData) {
        this.setState({
          facilitiesData,
          loading:false,
          // activeCargoContainer: flight.cargoContainers.filter( cargoContainer => cargoContainer.id === this.props.cargoContainerId )[0]
        })

        this.props.getFacilitiesDetailsFulfilled(facilitiesData)
      } else {
        this.setState({
          loading:false
        })
      }

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
    })
  }
}

export default connect(
  state => ({
    facilitiesList: state.facilitiesList
  }),
  dispatch => ({
    getFacilitiesDetails: () => dispatch(getFacilitiesDetails()),
    getFacilitiesDetailsFulfilled: (facilitiesData) => dispatch(getFacilitiesDetailsFulfilled(facilitiesData))
  })
)(InventoryFacilities);
