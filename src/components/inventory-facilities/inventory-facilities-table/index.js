import React from 'react';
import { Button, Collapse, Modal, Row, Switch, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { Panel } = Collapse;

class InventoryFacilitiesTable extends React.Component {
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
    const { data , criteria } = this.props;

    const columns = [{
      title: 'Facility ID',
      dataIndex: 'facilty_id',
      key: 'facilty_id',
    }, {
      title: 'Facility Name',
      dataIndex: 'facility_details',
      key: 'name',
      render:(text) => {
        return(
          <span>
            {text.name}
          </span>
        )
      }
    }, {
      title: 'Location',
      dataIndex: 'facility_location',
      key: 'facility_location',
    },{
      title: 'Facility Type',
      dataIndex: 'facility_type',
      key: 'facility_type',
    },{
      title: 'Description',
      dataIndex: 'facility_details',
      key: 'description',
      render:(text) => {
        return(
          <span>
            {text.description}
          </span>
        )
      }
    },{
      title: 'Action',
      dataIndex: 'facility_inventory',
      key: 'facility_inventory',
      render: (text, record) => {
        return(
          <Button type="dashed">
            <Link to={`/inventory-facilities/${record.facilty_id}`}>
                History
            </Link>
          </Button>
        )
      }
    }
  ];


    return(
      <div>
        {/* {console.log(this.props)} */}
        <Table
          rowKey="facilty_id"
          columns={columns}
          dataSource={ data }
          expandedRowRender={this.renderInventoryTable}
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

  renderInventoryTable = (record) => {
    console.log(record.facility_inventory)
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
    };
    return (
      <div>
        {(record)?
          <Collapse>
            <Panel bordered={false} header="ITEMS: " key="1">
              <Row>
                Fork: {(record.facility_inventory.Fork)? record.facility_inventory.Fork: '0'}
              </Row>
              <Row>
                Curry: {(record.facility_inventory.Curry)? record.facility_inventory.Curry: '0'}
              </Row>
              <Row>
                Pasta: {(record.facility_inventory.Pasta)? record.facility_inventory.Pasta: '0'}
              </Row>
              <Row>
                Spoon: {(record.facility_inventory.Spoon)? record.facility_inventory.Spoon: '0'}
              </Row>
              <Row>
                Chicken: {(record.facility_inventory.Chicken)? record.facility_inventory.Chicken: '0'}
              </Row>
              <Row>
                Wine Glass: {(record.facility_inventory.Wine_Glass)? record.facility_inventory.Wine_Glass: '0'}
              </Row>
            </Panel>
          </Collapse>
          :
          ""
        }
      </div>

    );

  }

  componentWillMount(){
    this.setState({
      data: this.props.data
    })
  }
  handleViewContainer = (record) => {
  //calculate your data here
  this.renderContainersTable(record.cargoContainers)
  //then redirect:
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

export default InventoryFacilitiesTable;
