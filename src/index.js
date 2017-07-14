import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl } from 'react-bootstrap';
import { bsClass, getClassSet } from 'react-bootstrap/lib/utils/bootstrapUtils';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import MaskedInputField from 'react-maskedinput';

class MaskedFormControl extends FormControl {
  render() {
    let classes;
    let formGroup = this.context.$bs_formGroup;
    let controlId = formGroup && formGroup.controlId;

    let { type, id, className } = this.props;
    if (!id) {
      id = controlId;
    }
    let props = {};
    for (let k in this.props) {
      if (!['componentClass', 'type', 'id', 'className', 'bsClass'].includes(k)) {
        props[k] = this.props[k];
      }
    }

    if (type !== 'file') {
      classes = getClassSet(this.props);
    }

    const combinedProps = Object.assign({}, props, {
      type,
      id,
      className: classNames(className, classes)
    });

    return (
      <MaskedInputField
        {...combinedProps}
      />
    );
  }
}

MaskedFormControl.propTypes = propTypes = {
  componentClass: PropTypes.element,
  // Only relevant if `componentClass` is `'input'`.
  type: PropTypes.string,
  // Uses `controlId` from `<FormGroup>` if not explicitly specified.
  id: PropTypes.string
};
MaskedFormControl.defaultProps = { componentClass: 'input' };
MaskedFormControl.contextTypes = { $bs_formGroup: PropTypes.object };

MaskedFormControl.Feedback = FormControlFeedback;
MaskedFormControl.Static = FormControlStatic;

export default bsClass('form-control', MaskedFormControl);
