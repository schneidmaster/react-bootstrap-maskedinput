import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import MaskedFormControl from '../src';

const Example = () => {
  return (
    <div className='container'>
      <h1>Example</h1>

      <FormGroup>
        <ControlLabel>Phone Number</ControlLabel>
        <MaskedFormControl type='text' name='phoneNumber' mask='111-111-1111' />
      </FormGroup>
    </div>
  );
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);
ReactDOM.render(<Example />, rootDiv);
