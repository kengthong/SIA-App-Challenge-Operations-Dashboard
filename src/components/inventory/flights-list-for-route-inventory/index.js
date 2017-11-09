import React from 'react';
import { Button, Card, Col, Row, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getFlightsListForRouteInventory } from './actions';

import './index.css';
import InventoryDetailsModal from './inventory-details-modal/index.js';
// import EditEventModal from '../edit-event-modal';
// import EfficiencyStatus from './efficiency.js';

class FlightsListForRouteInventory extends React.Component {
  render() {
    // let { sortedInfo, filteredInfo } = this.state;
    //     sortedInfo = sortedInfo || {};
    //     filteredInfo = filteredInfo || {};


    const  {route_id, flightsList, criteria}  = this.props;
    const { flightData, loading, activeLoadPlan } = this.state;


    // const FilteredFlights = flightsList
    //   .filter( flight => flight.cargo_count > 2 )
    //   .map( flight => (<div>{flight.flight_id}</div>))

    const columns = [{
      title: 'Flight ID',
      dataIndex: 'flight_id',
      key: 'flight_id',
    },{
      title: 'Percentage Lost',
      dataIndex: 'lost_percentage',
      key: 'lost_percentage',
      render: (record) =>
        <span>
          {`${record}%`}
          {/* <EfficiencyStatus
             load={(text>80)? 'efficient': (text> 40)? 'acceptable' : (text>0)? "few" : 'empty '}
           /> */}
         {/* {record.containers[0].containers[0].efficiency} */}
        </span>


    },{
      title: 'Condemn Percentage',
      dataIndex: 'condemned_percentage',
      key: 'condemned_percentage',
    },{
      title: 'Inventory Status',
      dataIndex: 'inventory_status',
      key: 'inventory_status',
    },{
      title: 'Check Out Remarks',
      dataIndex: 'check_out_remarks',
      key: 'check_out_remarks',

    },
    // {
    //   title: 'Container Count',
    //   dataIndex: 'containers',
    //   key: 'containers',
    //   render: (record) =>
    //     <Row>
    //       <Col span={4}/>{console.log(record)}
    //     </Row>
    //
    // },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {

        const { route_id, flight_id } = record;
        const { criteria } = this.props;

        return (
          <span>
            <Button type="dashed" onClick={() => this.openContainerModal(flight_id)}>
              <Link to={`/${criteria}/flight-routes/${route_id}/${flight_id}`}>
                View Load Plan
              </Link>
            </Button>
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
      <Card loading={!this.state.data}>
        {/* {this.renderFilteredFlightList(flightsList)} */}
        <Table
          rowKey="flight_id"
          columns={columns}
          dataSource={this.state.data}
          // dataSource={ this.state.flightData.cargoContainers }

          style={{height: '100px'}}/>
        {(this.state.data)?
          <div>
            {this.renderInventoryDetailsModal(this.state.activeFlightInventory)}
          </div>
          :
          ''
        }
        {console.log(this.state.data)}
      </Card>
    )
  }

  // renderFilteredFlightList = (flightsList) => {
  //   if(!flightsList.data){
  //     return <div>Loading...</div>;
  //   }
  //
  //  return flightsList.data
  //     .filter( flight => flight.cargo_count > 2 )
  //     .map( flight => (<div>{flight.flight_id}</div>))
  // }

  renderInventoryDetailsModal= (activeFlightInventory) => {
    return(
      <InventoryDetailsModal
        visible={this.state.visible}
        data={this.state.data[activeFlightInventory]}
        // data={(activeLoadPlan==0)? this.state.data[0].containers : this.state.data[activeLoadPlan].containers} //loadPlan is the MODAL TO SHOW ALL CONTAINERS IN THE FLIGHT
        flight_id={this.state.activeLoadPlan?this.state.activeLoadPlan: this.state.flight_id}
        closeModal={this.closeContainerModal}
      />
    )
  }

  constructor(props){
    super(props);
    this.state = {
      data: false,
      loading: false,
      visible: false,
      activeLoadPlan:0,
      flight_id:0,
      activeFlightInventory: 0,
    }
  }

  componentWillMount(){
    console.log(this.props.route_id)
    // console.log(this.props.route_id)
    if(this.props.route_id) {
      this.props.getFlightsListForRouteInventory(this.props.route_id)
        .then(res => {
          // console.log(res)
          const {data} = res.action.payload
            this.setState({
              data: data
            })
          }
        )
    }
  }
  closeContainerModal = () => {
    this.setState({
      visible: false,
    })
  }
  openContainerModal = (flight_id) => {

    const activeLoadPlan = flight_id;

    this.setState({
      visible: !this.state.visible,
      activeFlightInventory: flight_id
    })
  }



        // .then( res => {
        //   console.log(res)
        //   const flightData = res.data.map(
        //     flight => {
        //       flight.containers = JSON.parse(flight.containers);
        //       return flight;
        //     }
        //   );
        //
        //   console.log( flightData, this.props );
        //   // if(this.props.cargoContainerId){
        //     this.setState({
        //       flightData,
        //       loading:false,
        //       // activeCargoContainer: flight.cargoContainers.filter( cargoContainer => cargoContainer.id === this.props.cargoContainerId )[0]
        //     })
        //   // } else {
        //   //   this.setState({
        //   //     cargoContainers: this.props.airplaneCargo.flights[0].cargoContainers,
        //   //     flightData: flight,
        //   //     loading:false
        //   //   })
        //   // }
        //
        // })
        // .catch( err => console.log(err) );
}
export default withRouter(
  connect (
    state => ({
      inventoryFlightsList: state.inventoryFlightsList
    }),
    dispatch => ({
      getFlightsListForRouteInventory: (route_id) => dispatch(getFlightsListForRouteInventory(route_id))
    })
  )(FlightsListForRouteInventory)
);
