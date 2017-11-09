import React from 'react';
import { Badge, Button, Card, Collapse, Modal, Row, Switch, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


// import { getCargoContainers } from '../actions';

// import EditEventModal from '../edit-event-modal';
// import EfficiencyStatus from './efficiency.js';



class LoadPlanModal extends React.Component {
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
      title: 'Container Name',
      dataIndex: 'containerDetails',
      key: 'containerDetails',
      render: (text, record) =>
      <span>
        {record.containerDetails.containerName}
      </span>
      },{
        title: 'Flight Efficiency',
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
        render: (text, record) =>
        <span>
          {console.log(text, record)}
        </span>
      },{
        title: 'Container Details',
        dataIndex: 'containerDetails',
        key: 'containerDetails',
        render: (text, record) => {
          const {containerDimensions} = text;
          return (
            <span>
              {console.log(text, text.containerDimensions)}
              <Row>
                Container Dimensions:
                <Row>
                  width: {containerDimensions.width}
                </Row>
                <Row>
                  length:{containerDimensions.width}
                </Row>
                <Row>
                    height: {containerDimensions.length}
                </Row>


              </Row>
            </span>
          )
        }
      }
    ];


    return(
      <Modal visible={visible}
        onCancel={this.closeModal}cargoWeight
        className="cargo-modal"
        footer={[<Button key="back" size="large" onClick={this.closeModal}>Return</Button>,]}
        >
        {/* {console.log("props = " , this.props, ",state = " , this.state.cargoContainers)} */}

        <Card>

          <Table
            rowKey="containerIndex"
            columns={columns}
            dataSource={ this.props.containers }
            expandedRowRender={this.renderContentsTable}

            style={{height: '100px'}}
          />
        </Card>

      </Modal>
    )
  }


  renderContentsTable = (record) => {

    const columns2 = [
      { title: 'AirwayBill Number', dataIndex: 'cargoStringID', key: 'cargoStringID' },
      // { title: 'Sender`\'`s name', dataIndex: 'cargoDetails.senderName', key: 'cargoDetails.senderName' },
      { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      { title: 'Cargo Weight', dataIndex: 'cargoWeight', key: 'cargoWeight' },
      { title: 'Cargo Parameters', dataIndex: 'cargoParameters', key: 'cargoParameters', render: (text) => {
        return(
          <div>
            {text}
          </div>
        )
      }},
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
      activeCargoContainer: false,
      loading: true
    }
  }

  componentWillMount(){
    this.setState({
      loading: false,
      loadPlan: this.props.loadPlan
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
  )(LoadPlanModal)
);
