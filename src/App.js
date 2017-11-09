import React, { Component } from 'react';
import {
  Redirect,
  Route,
	Switch,
} from 'react-router-dom'

import logo from './logo.svg';
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd';

/**
* WEDDING ADMIN APP COMPONENTS
*/

import Sidebar from './components/Sidebar';
import LogInProfile from './components/LogInProfile';
import CargoSenseLogo from './components/cargo-sense-logo';
/**
 * Wedding admin app CONTAINERS
 */

// import LoadPlanTable from './containers/load-plan-table';
import CargoShareFormPage from './containers/cargo-share-form';
import Dashboard from './containers/dashboard';
import FlightRoutesListPage from './containers/cargo/flight-routes-list.js';
import FlightsListForRoutePage from './containers/cargo/flights-list-for-route.js';

import FlightsRoutesInventory from './containers/inventory/flight-routes-list.js';
import FlightsListInventory from './containers/inventory/flights-list-for-route.js';
import InventoryFacilitiesPage from './containers/inventory-facilities';
import InventoryFacilityHistoryPage from './containers/inventory-facilities/inventory-history-page';

// import RouteLoadPlanlistPage from './containers/route-load-plan-list';
// import Hotels from './containers/hotels';
import LoginPage from './containers/login';
import InventoryFacilities from './containers/inventory-facilities';





import './App.css';

const { Sider, Content, Header } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>

        <Sider style={{position:"absolute", height:'100vh'}}>
          <LogInProfile />
          <Menu>
            <Route path="/:root?" component={Sidebar} />
          </Menu>
        </Sider>

        <Layout style={{marginLeft: '200px'}}>
          <Row type="flex" align="end" className="app-header">
            <Col span={12}>
              <Header>
                <CargoSenseLogo />
              </Header>
            </Col>
          </Row>

          <Content>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/cargo/flight-routes" component={FlightRoutesListPage} />
              <Route exact path="/cargo/flight-routes/:route_id" component={FlightsListForRoutePage} />
              <Route exact path="/cargo/flight-routes/:route_id/:flight_id" component={FlightsListForRoutePage} />

              {/* INVENTORY */}
              <Route exact path="/inventory/flight-routes" component={FlightsRoutesInventory} />
              <Route exact path="/inventory/flight-routes/:route_id" component={FlightsListInventory} />
              <Route exact path="/inventory/flight-routes/:route_id/:flight_id" component={FlightsListInventory} />
              <Route exact path="/cargo-share-form" component={CargoShareFormPage} />

              {/* INVENTORY FACILITIES */}
              <Route exact path="/inventory-facilities" component={InventoryFacilitiesPage} />
              <Route exact path="/inventory-facilities/:facilty_id" component={InventoryFacilityHistoryPage} />
              {/* <Route exact path="/flight-cargo/:flight?" /> */}
              {/* <Route exact path="/cargo-container" component={Container} /> */}
              <Route exact path="/login" component={LoginPage} />
              {/* <Redirect to="/login" /> */}

							{/* <Route exact path="/" component={DashBoard} /> */}
              {/* <Route exact path="/billinghistory" component={BillingHistory} />

							<Route exact path="/credit" component={ ()=><div>credit</div>} />
							<Route exact path="/profile" component={Profile}/>
							<Route exact path="/favourites" component={Favourites} />
							<Route path="/" component={ ()=><div>404</div>} /> */}
              {/* <Route exact path="/products/new" component={AddANewProductContainer} /> */}
              {/* <Route exact path="/orders" component={SupplierOrders} /> */}
              {/* <Route exact path="/get-started" component={GetStartedPage} /> */}
              {/* <Route exact path="/register" component={RegisterPage} /> */}
						</Switch>
          </Content>
        </Layout>

      </Layout>
    );
  }
}

export default App;
