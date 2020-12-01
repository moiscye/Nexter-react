import React, { Component } from "react";
import axios from "axios";
import { Button, Modal, Form, Col } from "react-bootstrap";
export default class ContactModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetails: {
        fullName: "",
        phoneNumber: "",
        property: "",
        email: "",
        message: "",
      },
    };
  }
  handleChange = (e) => {
    var data = { ...this.state.contactDetails };
    data[e.target.id] = e.target.value;
    this.setState({
      contactDetails: data,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    this.props.handleClose();
    axios.post("/.netlify/functions/getincontact", this.state.contactDetails);
  };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Full Name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="property">
                  <Form.Label>Property</Form.Label>
                  <Form.Control
                    placeholder="Property"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
