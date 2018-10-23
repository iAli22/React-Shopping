import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TaxesFeed extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}> Taxes & Feed (Based On 94085)</Col>
        <Col md={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFeed;
