import React from 'react';
import { Menu, Icon } from 'antd';

import { withRouter, Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

class Sidebar extends React.Component{
	// const cargo = "cargo";
	// const inventory = "inventory"
	render(){

		return (
			<Menu
				className="sider-menu"
				onClick={this.handleClick}
        selectedKeys={[this.props.match.params.root]}
				theme="dark"
				mode="inline">

				{/* DASHBOARD */}
				<Item key="dashboard" >
          <Link to="/dashboard">
            <Icon type="home" /> Dashboard
          </Link>
				</Item>

				{/* CARGO-CONTAINERS */}
				<Item key="cargo" >
          <Link to={`/cargo/flight-routes`}>
            <Icon type="switcher" />Cargo Containers
          </Link>
				</Item>

				{/* INVENTORY */}
				<Item key="inventory" >
          <Link to={`/inventory/flight-routes`}>
            <Icon type="shop" />  Inventory
          </Link>
				</Item>

				{/* CARGO FORM */}
				<Item key="cargo-form" >
          <Link to={`/cargo-share-form`}>
            <Icon type="inbox" />Cargo Share Form
          </Link>
				</Item>

				{/* INVENTORY FACILITIES */}
				<Item key="inventory-facilities" >
          <Link to={`/inventory-facilities`}>
            <Icon type="inbox" />Inventory Facilities
          </Link>
				</Item>
			</Menu>





		)

	}

	constructor(props){
		super(props);

		this.state = {
			current: "nav1",
		}
	}

	handleClick = (e) => {
		this.setState({
			current: e.key
		})
	}



	// handleClick(evt){
  //
	// 	this.props.history.push(evt.key);
	// 	// this.setState({
	// 	// 	current: evt.target.key
	// 	// })
	// }


}

export default withRouter(Sidebar);
