import React from 'react';
import {sha256} from 'js-sha256';
import { connect } from 'react-redux';
import { Button, Card, Col, Input, Row } from 'antd';

import { loginDetails } from '../user/actions';

import siaLogo from './sia-logo.png';
class LoginComponent extends React.Component {
  render() {
    return(
      <div>
        <Card>
          <Row>
            <img src={siaLogo} style={{maxWidth: "100px", maxHeight: "100px"}}/>
          </Row>
          <Row>
            <Col span={4}>
              Login:
            </Col>
            <Col span={20}>
              <Input
                name="username"
                onChange={(e) => this.handleInputChange(e)}
                placeholder="Username"
              />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              Password:
            </Col>
            <Col span={20}>
              <Input
                name="password"
                onChange={(e) => this.handleInputChange(e)}
                placeholder="Password"
                type="password"
              />
              {this.state.password}
            </Col>
          </Row>

          <Button
            onClick={this.handleSubmit}
            type="primary">
            Submit
          </Button>
        </Card>
      </div>
    )
  }
  componentWillMount(){
    this.setState({
      username: '',
      password:'',
      login:''
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const username = this.state.username;
    const password = sha256(`${this.state.password}`);
    this.props.loginDetails(username, password);
    console.log(username)
    // this.props.logIn(login)
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch=> ({
    loginDetails: (username, password) => dispatch(loginDetails(username, password))
  })
)(LoginComponent);
