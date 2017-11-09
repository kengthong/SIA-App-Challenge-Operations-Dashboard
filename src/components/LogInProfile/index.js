import React from 'react';
import { Avatar, Card, Col, Row } from 'antd';

import { connect } from 'react-redux';

class LogInProfile extends React.Component {
  render() {
    return(
      <div className="login-profile">
        {(this.props.user.data)?
        <div>
          <Row align="center" type="flex">
              <img style={{maxWidth: "80px", maxHeight:'80px', borderRadius: "50%"}} src={`${this.props.user.data.image}`}  />

          </Row>

          <Row className="profile-words">
            ID: {this.props.user.data.account_id}
          </Row>
          <Row className="profile-words">
            Account: {this.props.user.data.roles}
          </Row>
        </div>
          :
          <Row align="center" type="flex">
            <Avatar shape="circle" icon="user" size="large" />
          </Row>
        }

      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user
  })
)(LogInProfile);
