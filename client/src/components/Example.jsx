import React, { useState, useEffect } from "react";

import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const Example = props => {
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    setShow(props.show);
  });

  return (
    <>
      <Modal show={show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlInput2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="Phone Number" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlInput3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlInput4">
                <Form.Label>Property</Form.Label>
                <Form.Control placeholder="Property" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.send}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Example;
