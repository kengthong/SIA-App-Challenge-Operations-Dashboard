import React from 'react';
import { Card, Col, Row } from 'antd';
import { connect } from 'react-redux';


import CargoAnalysisChart from './cargo-analysis-chart';
import CargoEfficiency from './cargo-efficiency.js';
import InventoryAnalytics from './inventory-analytics.js';
import InventoryEfficiency from './inventory-efficiency';

import {getAnalytics} from './actions/index.js';

import './index.css';
import InventoryHeatMap from './heat-map';

class DashboardComponent extends React.Component {
  render() {

    const { average_cargo_efficiency, average_lost_percentage, line_chart, world_web } = this.props.analyticsState.data;

    return(
      <Card>
        <Card className="card-spacing" title="Past 7 Days">
          <Col span={10}  >
            <CargoEfficiency percent={average_cargo_efficiency}/>
          </Col>
          <Col span={10}  >
            <InventoryEfficiency percent={average_lost_percentage}/>
          </Col>

        </Card>
        <Card className="card-spacing"  title="Cargo Analytics" style={{width: "100%"}, {height: "100%"}}>
          <Row>
            <CargoAnalysisChart data={line_chart}/>
          </Row>
        </Card>

        <Card className="card-spacing" title="Inventory Analytics">
          <Col span={12}  >
            <InventoryAnalytics />
          </Col>
        </Card>

        <Row>
          <Col span={24}>
            <InventoryHeatMap />
          </Col>
        </Row>


      </Card>
    )
  }

  constructor(props) {
    super(props)
    this.state={
      data: false,
      loading: false,
      line_chart: false,
      world_web: false,
      average_cargo_efficiency: false,
      average_lost_percentage: false,
    }
  }

  componentWillMount() {
    this.props.getAnalytics()
  }


}

export default connect(
  state => ({
    analyticsState: state.analyticsState
  }),
  dispatch => ({
    getAnalytics: () => dispatch(getAnalytics())
  })
)(DashboardComponent);
