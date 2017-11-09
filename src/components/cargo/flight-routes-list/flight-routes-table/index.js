import React from 'react';
import { Button, Modal, Switch, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import EditEventModal from '../edit-event-modal';
// import ContainersTable from '../containers';
// import EventStatus from './event-status';

class FlightRoutesTable extends React.Component {
  render() {
    // let { sortedInfo, filteredInfo } = this.state;
    //     sortedInfo = sortedInfo || {};
    //     filteredInfo = filteredInfo || {};


    // const { status } = this.props;
    //
    // let filteredEvents;
    //
    //
    // if(status === '/'){
    //   filteredEvents = this.props.flights;
    // } else {
    //   filteredEvents = this.props.flights.filter(
    //     (flight) => {
    //       return flight.status === status
    //     }
    //   )
    // }
    const { data, criteria} = this.props;
    let activeStatus
    const columns = [{
      title: 'Route ID',
      dataIndex: 'route_id',
      key: 'route_id',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Flight No.',
      dataIndex: 'flight_number',
      key: 'flight_number',
    }, {
      title: 'Route From',
      dataIndex: 'route_from',
      key: 'route_from',
    },{
      title: 'Route To',
      dataIndex: 'route_to',
      key: 'route_to',
    },{
      title: 'Flight Count',
      dataIndex: 'flight_count',
      key: 'flight_count',
    },{
      title: 'Days Avail',
      dataIndex: 'days_available',
      key: 'days_available',
    },{
      title: 'Action',
      key: 'flights_for_route',
      render: (text, record, index) => (
        <span>
            {/* <EditEventModal  index = {index} record={record}/> */}
            {/* <Button onClick={() => this.props.handleOpenModal(record,index)} >Edit</Button> */}
            <Button type="dashed">
              <Link to={`/${this.props.criteria}/flight-routes/${record.route_id}`}>
                View Flights
              </Link>
            </Button>
          {/* <a onClick={() => this.handleEditHotel(record)} >Edit</a> */}
        </span>
      ),
    }
  ];


    return(
      <div>
        {/* {console.log(this.props)} */}
        <Table
          columns={columns}
          dataSource={ data }
          style={{height: '100px'}}/>
          {/* {console.log(this.props.flight)} */}
        {/* <Modal
            onCancel={this.closeModal}
            visible={this.state.activeEvent}>
          editing: {this.state.activeEvent.name}
        </Modal> */}
      </div>
    )
  }

  renderContainersTable = (containers) => {
    return(
      <div>
        {/* <ContainersTable cargoContainer={containers}/> */}
      </div>
    )
  }
  componentWillMount(){
    this.setState({
      flights: this.props.flights
    })
  }
  handleViewContainer = (record) => {
  //calculate your data here
  this.renderContainersTable(record.cargoContainers)
  //then redirect:
  console.log(record)
}
  // componentWillReceiveProps(newProps){
  //
  //   if (this.state.events !== newProps.eventList.events) {
  //     this.setState({events: newProps.eventList.events});
  //   }
  //   setTimeout(() => {console.log("EVENT-TABLE NEWPROPS =" , newProps, "EVENT-TABLE STATE =", this.state)}, 1000)
  // }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     activeEvent: false
  //   }
  // }
  //
  // // closeModal = () => {
  // //   this.setState({
  // //     activeEvent:false
  // //   })
  // // }
  //
  // // handleEditHotel = (record) => {
  // //   console.log(record);
  // //   this.setState({
  // //     activeEvent: record
  // //   })
  // // }
  //
  // handleEventInformation = (record) => {
  //   this.setState({
  //     eventInformation: record
  //   })
  // }
}

export default FlightRoutesTable;
