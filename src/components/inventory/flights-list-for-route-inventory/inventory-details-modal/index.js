import React from 'react';
import { Badge, Button, Card, Collapse, Modal, Switch, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// import { Hi } from './inventory-details-component'
import InventoryDetailsComponent from './inventory-details-component';
// import { FlightStatus } from './inventory-details-component/flight-status.js';
// import { getCargoContainers } from '../actions';

// import EditEventModal from '../edit-event-modal';
// import EfficiencyStatus from './efficiency.js';



class InventoryDetailsModal extends React.Component {
  render() {
    // let { sortedInfo, filteredInfo } = this.state;
    //     sortedInfo = sortedInfo || {};
    //     filteredInfo = filteredInfo || {};
    const { Panel } = Collapse;
    const { visible } = this.props;
    const { flight_id, route_id, criteria } = this.props;
    const { loading } = this.state;



    let activeStatus
    const columns = [{
      title: 'Item Name',
      dataIndex: 'containerIndex',
      key: 'containerIndex',
      },{
        title: 'Efficiency',
        dataIndex: 'containerEfficiency',
        key: 'containerEfficiency',
        render: (text, record) =>
          <span>
            {text}
            {/* <EfficiencyStatus
               load={(text>80)? 'efficient': (text> 40)? 'acceptable' : (text>0)? "few" : 'empty '}
             /> */}
          </span>


      },{
        title: 'Weight',
        dataIndex: 'containerWeight',
        key: 'containerWeight',
      },{
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => {
          return (
            <span>
              {/* <Button type="primary">
                <Link to={`/flight-cargo/${route_id}/${flight_id}`}>
                  Contents
                </Link>
              </Button> */}
              {/* <Collapse>
                <Panel header="This is panel header 1" key="1">
                  <p>hello</p>
                </Panel>
              </Collapse> */}
            </span>
          )
      }
      // render: text => {
      //   <span>
      //     erarearear
      //     {text}
      //     {/* <EventStatus
      //      status={text}/> */}
      //   </span>
      // },
      }
    ];


    return(
      <Modal className="inventory-modal" visible={visible}
        onCancel={this.closeModal}
        footer={[
          <Button key="back" size="large" onClick={this.closeModal}>
            Return
          </Button>,
        ]}>

          {(this.state.data)?
            <div>
                {console.log(this.state.data)}
                <InventoryDetailsComponent
                data={this.state.data}
                />
            </div>
              :
            ""
          }


          {/* <Table
            rowKey="containerIndex"
            columns={columns}
            dataSource={ this.state.data }
            expandedRowRender={this.renderContentsTable}

            style={{height: '100px'}}
          /> */}

      </Modal>
    )
  }


  renderContentsTable = (record) => {

    const columns2 = [
      { title: 'AirwayBill Number', dataIndex: 'cargoStringID', key: 'cargoStringID' },
      // { title: 'Sender`\'`s name', dataIndex: 'cargoDetails.senderName', key: 'cargoDetails.senderName' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className="table-operation">
            <a href="#">Pause</a>
            <a href="#">Stop</a>

          </span>
        ),
      },
    ];

    const data2 = record.contents;

    return (
      <Table
        rowKey="cargoStringID"
        columns={columns2}
        dataSource={data2}
        pagination={false}
      />
    );

  }
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data: false,
    }
  }

  componentWillMount(){
    console.log(this.props)
    this.setState({
      loading: false,
      data: this.props.data
    })
  }


  handleOpenContent = (cargoContainerId) => {
    this.setState({
      activeCargoContainer: this.state.flightData.cargoContainers.filter( cargoContainer => cargoContainer.id === cargoContainerId )[0]
      // record,
      // activeHotel: index
    })
  }

  closeModal = () => {
    this.props.closeModal()
    console.log('close')
  }
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
// }

export default withRouter(
  connect (
    state => ({
      // airplaneCargo: state.airplaneCargo
    })
  )(InventoryDetailsModal)
);
