import React from 'react';
import { Button, Collapse, Modal, Row, Switch, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFacilitiesHistory } from '../actions';

const { Panel } = Collapse;

class InventoryFacilityHistory extends React.Component {
  render() {
    const { criteria , facilty_id } = this.props;
    //
    // “movement_id”: 1,
    // “facilty_id”: 1,
    // “movement_type”: “Withdraw”,
    // “movement_inventory”: {
    // “Fork”: 100,
    // “Curry”: 20,
    // “Pasta”: 20,
    // “Spoon”: 100,
    // “Chicken”: 20,
    // “Wine_Glass”: 20
    // },
    // “approved_by”: “sia_super_user”,
    // “date_moved”: “2017-10-18 00:00:00”

    const columns = [{
      title: 'Movement Id',
      dataIndex: '“movement_id”',
      key: '“movement_id”',
    }, {
      title: 'Facility Id',
      dataIndex: '“facilty_id”',
      key: '“facilty_id”',
    }, {
      title: 'Movement Type',
      dataIndex: '“movement_type”',
      key: '“movement_type”',
    },{
      title: 'Approved By',
      dataIndex: '“approved_by”',
      key: '“approved_by”',
    },{
      title: 'Date Moved',
      dataIndex: '“date_moved”',
      key: '“date_moved”',
    },{
      title: 'Action',
      dataIndex: 'facility_inventory',
      key: 'facility_inventory',
      render: (text, record) => {
          return(
            <Button type="dashed">
              Copy
            </Button>
          )
        }
      }
    ];

    const data2 = this.state.facilityHistory;

    if(!this.props.inventoryFacilitiesList.history) {
      return(
        <div>Loading...</div>
      )
    }
    if(this.props.inventoryFacilitiesList.history) {
      return(
        <div>
          {/* {console.log(this.props)} */}
          <Table
            rowKey="movement_id"
            columns={columns}
            dataSource={parseFloat(this.props.inventoryFacilitiesList.history)}
            // expandedRowRender={this.renderItemDetails}
            style={{height: '100px'}}/>
            {console.log(typeof this.props.inventoryFacilitiesList.history , this.props.inventoryFacilitiesList.history.valueOf())}
            {/* {console.log(this.props.flight)} */}
          {/* <Modal
              onCancel={this.closeModal}
              visible={this.state.activeEvent}>
            editing: {this.state.activeEvent.name}
          </Modal> */}
        </div>
      )

    }

  }
  //
  // renderInventoryTable = (record) => {
  //   console.log(record.facility_inventory)
  //   const customPanelStyle = {
  //     background: '#f7f7f7',
  //     borderRadius: 4,
  //     marginBottom: 24,
  //     border: 0,
  //     overflow: 'hidden',
  //   };
  //   return (
  //     <div>
  //       {(record)?
  //         <Collapse>
  //           <Panel bordered={false} header="ITEMS:: " key="1">
  //             <Row>
  //               Fork: {(record.facility_inventory.Fork)? record.facility_inventory.Fork: '0'}
  //             </Row>
  //             <Row>
  //               Curry: {(record.facility_inventory.Curry)? record.facility_inventory.Curry: '0'}
  //             </Row>
  //             <Row>
  //               Pasta: {(record.facility_inventory.Pasta)? record.facility_inventory.Pasta: '0'}
  //             </Row>
  //             <Row>
  //               Spoon: {(record.facility_inventory.Spoon)? record.facility_inventory.Spoon: '0'}
  //             </Row>
  //             <Row>
  //               Chicken: {(record.facility_inventory.Chicken)? record.facility_inventory.Chicken: '0'}
  //             </Row>
  //             <Row>
  //               Wine Glass: {(record.facility_inventory.Wine_Glass)? record.facility_inventory.Wine_Glass: '0'}
  //             </Row>
  //           </Panel>
  //         </Collapse>
  //         :
  //         ""
  //       }
  //     </div>
  //
  //   );
  //
  // }


  constructor(props) {
    super(props);
    this.state={
      data: '',
      loading: '',
      facilityHistory: '',
    }
  }
  componentWillMount(){
    this.setState({
      data: this.props.data,
      facility_id: this.props.facility_id
    })
    const {facility_id} = this.props;
    this.props.getFacilitiesHistory(facility_id);

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

export default connect(
  state => ({
    inventoryFacilitiesList: state.inventoryFacilitiesList
  }),
  dispatch => ({
    getFacilitiesHistory: (facility_id) => dispatch(getFacilitiesHistory(facility_id))
  })
)(InventoryFacilityHistory);
