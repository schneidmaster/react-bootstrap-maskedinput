/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";
import ReactBootstrapMaskedInput from "../src";

describe("Component", () => {
  it("renders correctly with basic props", () => {
    const { container } = render(
      <ReactBootstrapMaskedInput mask="111-111-1111" />
    );

    expect(container).toMatchSnapshot();
  });

  it("passes complex props through to FormControl and MaskedInput", () => {
    const { container } = render(
      <ReactBootstrapMaskedInput
        bsClass="my-form-control"
        bsSize="large"
        id="my-id"
        inputRef={(ref) => ref}
        mask="111-111-1111"
        placeholder="555-555-5555"
        size={10}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
