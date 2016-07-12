{FormControl}          = require('react-bootstrap')
MaskedInputField       = require('react-maskedinput')
{bsClass, getClassSet} = require('react-bootstrap/lib/utils/bootstrapUtils')
FormControlFeedback    = require('react-bootstrap/lib/FormControlFeedback')
FormControlStatic      = require('react-bootstrap/lib/FormControlStatic')
React                  = require('react')
elementType            = require('react-prop-types/lib/elementType')
classNames             = require('classnames')

propTypes =
  componentClass: elementType
  # Only relevant if `componentClass` is `'input'`.
  type: React.PropTypes.string
  # Uses `controlId` from `<FormGroup>` if not explicitly specified.
  id: React.PropTypes.string

defaultProps =
  componentClass: 'input'

contextTypes =
  $bs_formGroup: React.PropTypes.object

class MaskedFormControl extends FormControl
  render: ->
    formGroup = @context.$bs_formGroup
    controlId = formGroup && formGroup.controlId

    {type, id, className} = @props
    id ||= controlId
    props = {}
    props[k] = v for k, v in @props when k not in ['componentClass', 'type', 'id', 'className', 'bsClass']

    classes = getClassSet(@props) unless type is 'file'

    <MaskedInputField
      {...@props}
      type={type}
      id={id}
      className={classNames(className, classes)}
    />

MaskedFormControl.propTypes = propTypes
MaskedFormControl.defaultProps = defaultProps
MaskedFormControl.contextTypes = contextTypes

MaskedFormControl.Feedback = FormControlFeedback
MaskedFormControl.Static = FormControlStatic

module.exports = bsClass('form-control', MaskedFormControl)
