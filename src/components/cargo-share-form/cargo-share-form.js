import React from 'react'
import { connect } from 'react-redux';
import { Button, Card, Checkbox, Form, Input, Row, Switch } from 'antd';
import { addThirdPartyCargoAsync, addThirdPartyCargoFulfilled, addThirdPartyCargoRejected } from './actions';

import './index.css';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Fragile', value: 'fragile' },
  { label: 'Upright', value: 'upright' },
  { label: 'Perishables', value: 'perishables' },
  { label: 'Keep Dry', value: 'keep_dry' },
  { label: 'Away from Heat', value: 'away_from_heat' },
];

class CargoShareForm extends React.Component {
  render() {

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {span:4},
      wrapperCol: {span:20}
    }
    return(
      <Card title="Cargo Share Form">

        <Form onSubmit={this.handleSubmit}>
          <Row className="title form-label">
            Airway Bill
          </Row>
          <Row>
            {/* AIRWAY BILL */}
            <FormItem
              {...formItemLayout}
              label="Airway Bill"
              hasFeedback>
              {getFieldDecorator('airway_bill', {
                rules: [{ required: true, message: 'AirwayBill is required!' }],
              })(
                <Input />
              )}
            </FormItem>
          </Row>

          <Row className="title form-label">
            Personal Information
          </Row>
          <Row>

            {/* COMPANY NAME */}
            <FormItem
              {...formItemLayout}
              label="Company Name"
              hasFeedback>
              {getFieldDecorator('company_name', {
                rules: [{ required: true, message: 'Company name is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* EMAIL */}
            <FormItem
              {...formItemLayout}
              label="Email"
              hasFeedback>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Email is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* SENDER NAME */}
            <FormItem
              {...formItemLayout}
              label="Sender Name"
              hasFeedback>
              {getFieldDecorator('senderName', {
                rules: [{ required: true, message: 'Sender`\s name is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* RECEIPIENT NAME */}
            <FormItem
              {...formItemLayout}
              label="Receipient Name"
              hasFeedback>
              {getFieldDecorator('recipientName', {
                rules: [{ required: true, message: 'Receipient`\s name is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* RECIPIENT'S ADDRESS */}
            <FormItem
              {...formItemLayout}
              label="Recipient Address"
              hasFeedback>
              {getFieldDecorator('recipientAddress', {
                rules: [{ required: true, message: 'Address is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* NUMBER */}
            <FormItem
              {...formItemLayout}
              label="Contact Number"
              hasFeedback>
              {getFieldDecorator('contactNumber', {
                rules: [{ required: true, message: 'Contact Number is required!' }],
              })(
                <Input />
              )}
            </FormItem>

          </Row>

          <Row className="title form-label">
            Item Details
          </Row>
          <Row>
            {/* DATE */}
            <FormItem
              {...formItemLayout}
              label="Delivery Date"
              hasFeedback>
              {getFieldDecorator('deliveryDate', {
                rules: [{ required: true, message: 'Number is required!' }],
              })(
                <Input placeholder="YYYY-MM-DD"/>
              )}
            </FormItem>



            {/* DIMENSIONS - Height */}
            <FormItem
              {...formItemLayout}
              label="Height (cm)"
              hasFeedback>
              {getFieldDecorator('height', {
                rules: [{ required: true, message: 'Height is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* DIMENSIONS - Length */}
            <FormItem
              {...formItemLayout}
              label="Length (cm)"
              hasFeedback>
              {getFieldDecorator('length', {
                rules: [{ required: true, message: 'Length is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* DIMENSIONS - Width */}
            <FormItem
              {...formItemLayout}
              label="Width (cm)"
              hasFeedback>
              {getFieldDecorator('width', {
                rules: [{ required: true, message: 'Width is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* WEIGHT */}
            <FormItem
              {...formItemLayout}
              label="Weight (KG)"
              hasFeedback>
              {getFieldDecorator('cargoWeight', {
                rules: [{ required: true, message: 'Weight is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* ITEM DESCRIPTION */}
            <FormItem
              {...formItemLayout}
              label="Remarks"
              hasFeedback>
              {getFieldDecorator('remarks', {
                rules: [{ required: true, message: 'Remarks is required!' }],
              })(
                <Input />
              )}
            </FormItem>

            {/* LABELS GROUP */}
            <FormItem
              {...formItemLayout}
              label="Labels">
              <Switch onChange={this.toggleLabelGroup}/>
                {(this.state.labelGroup)?
                  <div>
                    {getFieldDecorator('label_groups', {
                      valuePropName: "labelGroups",
                    })(
                      <CheckboxGroup options={options} onChange={this.toggleLabels} />
                    )}
                  </div>
                  :
                  ""
                }

            </FormItem>
          </Row>

          <FormItem>
            <Button type="dashed" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      labelGroup: false
    }
  }
  toggleLabelGroup = () => {
    this.setState({
      labelGroup: !this.state.labelGroup,
    })
  }
  toggleLabels = (checkedValues) => {

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {

        addThirdPartyCargoAsync(values)
          .then( ( res) => {
            console.log(res)
            this.props.form.resetFields();
            this.props.addThirdPartyCargoFulfilled(res.data, values.company_name);

          })
          .catch( err => {

            console.log(err);
            addThirdPartyCargoRejected(values.company_name);

          })

      }
    });

  }
}

export default  connect(
  state => ({}),

  dispatchEvent => ({
    addThirdPartyCargoFulfilled: (cargo, company_name) => dispatchEvent(addThirdPartyCargoFulfilled(cargo, company_name))
  })
)(Form.create()(CargoShareForm));
