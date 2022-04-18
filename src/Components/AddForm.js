import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const AddForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col md={7}>
            <Form.Control type="email" placeholder="text only" />
          </Col>
          <Col md={3}>
            <Form.Control type="email" placeholder="enter hours" />
          </Col>
          <Col md={2}>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </div>
  );
};
