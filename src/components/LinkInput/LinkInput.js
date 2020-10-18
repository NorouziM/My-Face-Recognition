import React from "react";
import { Form, Row } from "react-bootstrap";

const LinkInput = () => {
  return (
    <Row>
      <div className="w-50 text-center mx-auto mt-5">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Put Your Image URL Here</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
        </Form>
      </div>
    </Row>
  );
};
export default LinkInput;
