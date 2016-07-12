[![npm version](https://badge.fury.io/js/react-bootstrap-maskedinput.svg)](https://badge.fury.io/js/react-bootstrap-maskedinput)

# react-bootstrap-maskedinput

[react-maskedinput](https://github.com/insin/react-maskedinput) form element that works with [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap).

For `react-bootstrap` < 0.29.0, use [v0.1.0](https://github.com/schneidmaster/react-bootstrap-maskedinput/releases/tag/v0.1.0). For current versions of `react-bootstrap`, use 0.2.0.

## Usage

1. Install the package: `npm install react-bootstrap-maskedinput --save`
2. Import the component: `import MaskedInput from 'react-bootstrap-maskedinput'`
3. Use in your JSX -- the component accepts all the usuals from react-bootstrap's `Input` component plus react-maskedinput's `MaskedInput` component.

Simple example:

```javascript
import MaskedInput from 'react-bootstrap-maskedinput'

export class MyForm extends React.Component {
  render () {
    return (
      <FormGroup>
        <ControlLabel>Phone Number</ControlLabel>
        <MaskedFormControl type='text' name='phoneNumber' mask='111-111-1111' />
      </FormGroup>
    );
  }
}
```

## Development

### Prerequisites

* git
* npm

### Setup

1. Clone the repository (`git clone git@github.com:schneidmaster/react-bootstrap-maskedinput.git`)
2. Install dependencies: `npm install`

### Deployment

1. Run `npm run build` to build an ES5 version of the class.

## Contributing

1. Fork it ( https://github.com/schneidmaster/react-bootstrap-maskedinput/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## License

MIT
