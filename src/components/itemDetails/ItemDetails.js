import React, { Component } from "react";
import { Row, Col, Media, Collapse, Button, Well } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div>
        <Button
          className="itme-details-btn"
          bsStyle="link"
          onClick={this.onClick}
        >
          {this.state.open === false ? "See " : "Hide "}
          item Details
          {this.state.open === false ? " +" : " -"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://cf1.s3.souqcdn.com/item/2017/08/09/23/74/44/24/item_XXL_23744424_34257212.jpg"
                  />
                </Media.Left>
                <Media.Body>
                  <p>laptop bag USB charging shoulder bag college students</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
