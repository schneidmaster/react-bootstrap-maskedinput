React            = require('react')
classNames       = require('classnames')
Input            = require('react-bootstrap').Input
MaskedInputField = require('react-maskedinput')

class MaskedInput extends Input
  renderInput: ->
    className = if @isCheckboxOrRadio() || @isFile() then '' else 'form-control'
    <MaskedInputField {...@props} className={classNames(@props.className, className)} ref='input' key='input' />

module.exports = MaskedInput
