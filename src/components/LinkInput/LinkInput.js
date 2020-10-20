import React from "react";
import { Form, Row, Button } from "react-bootstrap";

const LinkInput = () => {
  return (
    <Row>
      <div className="w-50 text-center mx-auto mt-5">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Put Your Image URL Here</Form.Label>
            <div className="input-group">
              <Form.Control
                className="mr-1"
                type="text"
                placeholder="name@example.com"
              />
              <div className="input-group-append">
                <Button variant="outline-dark"> Detect </Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
    </Row>
  );
};
export default LinkInput;
