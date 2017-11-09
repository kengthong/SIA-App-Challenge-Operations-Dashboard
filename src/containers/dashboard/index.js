import React from 'react';

import DashboardComponent from '../../components/dashboard';


class Dashboard extends React.Component {
  render() {
    const { filter } = this.props.match.params;
    console.log(this.props)
    return(
      <div>
        <DashboardComponent />
      </div>
    )
  }
}
export default Dashboard;
