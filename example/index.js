import React from "react";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import MaskedFormControl from "../src";

const Example = () => {
  return (
    <div className="container">
      <h1>Example</h1>

      <Form>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <MaskedFormControl
            type="text"
            name="phoneNumber"
            mask="111-111-1111"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

const rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
ReactDOM.render(<Example />, rootDiv);
