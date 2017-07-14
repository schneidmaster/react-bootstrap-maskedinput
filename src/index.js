import { FormControl } from 'react-bootstrap';
import MaskedInputField from 'react-maskedinput';
import { bsClass, getClassSet } from 'react-bootstrap/lib/utils/bootstrapUtils';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import React from 'react';
import elementType from 'react-prop-types/lib/elementType';
import classNames from 'classnames';

let propTypes = {
  componentClass: elementType,
  // Only relevant if `componentClass` is `'input'`.
  type: React.PropTypes.string,
  // Uses `controlId` from `<FormGroup>` if not explicitly specified.
  id: React.PropTypes.string
};

let defaultProps = { componentClass: 'input' };

let contextTypes = { $bs_formGroup: React.PropTypes.object };

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
      let v = this.props[k];
      if (
        !['componentClass', 'type', 'id', 'className', 'bsClass'].includes(k)
      ) {
        props[k] = v;
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

MaskedFormControl.propTypes = propTypes;
MaskedFormControl.defaultProps = defaultProps;
MaskedFormControl.contextTypes = contextTypes;

MaskedFormControl.Feedback = FormControlFeedback;
MaskedFormControl.Static = FormControlStatic;

export default bsClass('form-control', MaskedFormControl);
