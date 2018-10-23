import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  Well,
  Button,
  Form,
  Collapse,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { connect } from "react-redux";
//import PropTypes from 'prop-types';
import { handleChange } from "../../actions/PromoCodeAction";

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick() {
    this.setState({
      open: !this.state.open
    });
  }

  onChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-btn"
          bsStyle="line"
          onClick={this.onClick}
        >
          {this.state.open === false ? "Apply " : "Hide "}
          Promo Code
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Type Your PromoCode"
                        value={this.props.promoCode}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Add
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
