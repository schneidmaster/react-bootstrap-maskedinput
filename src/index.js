import React from "react";
import MaskedInput from "react-maskedinput";
import { FormControl } from "react-bootstrap";

export default function MaskedFormControl(props) {
  return <FormControl as={MaskedInput} {...props} />;
}
