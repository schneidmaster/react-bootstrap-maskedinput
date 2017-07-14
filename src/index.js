import React from 'react';

import MaskedInput from 'react-maskedinput';
import { FormControl } from 'react-bootstrap';

export default class MaskedFormControl extends FormControl {
  render() {
    const props = Object.assign({}, this.props, { componentClass: MaskedInput });

    return React.createElement(FormControl, props);
  }
}

// FormControl has a componentClass prop which 
// MaskedFormControl always overrides to be a 
// MaskedInput.
delete MaskedFormControl.propTypes.componentClass;
