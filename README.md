[![npm version](https://badge.fury.io/js/react-bootstrap-maskedinput.svg)](https://badge.fury.io/js/react-bootstrap-maskedinput)
[![CircleCI](https://circleci.com/gh/schneidmaster/react-bootstrap-maskedinput.svg?style=shield)](https://circleci.com/gh/schneidmaster/react-bootstrap-maskedinput)
[![Coverage Status](https://coveralls.io/repos/github/schneidmaster/react-bootstrap-maskedinput/badge.svg?branch=master)](https://coveralls.io/github/schneidmaster/react-bootstrap-maskedinput?branch=master)

# react-bootstrap-maskedinput

[react-maskedinput](https://github.com/insin/react-maskedinput) form element that works with [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap).

## Versioning

* For `react-bootstrap` < 0.29.0, use [v0.1.0](https://github.com/schneidmaster/react-bootstrap-maskedinput/releases/tag/v0.1.0).
* For current versions of `react-bootstrap`, use >= 0.2.x.
* For projects on React >= 0.15.5, use 0.3.x to get rid of the proptypes warning. 0.3.x is also the first version to support `react-maskedinput` 4.x.

## Usage

1. Install the package: `npm install react-bootstrap-maskedinput --save` or `yarn add react-bootstrap-maskedinput`
2. Import the component: `import MaskedFormControl from 'react-bootstrap-maskedinput'`
3. Use in your JSX -- the component accepts all the usuals from react-bootstrap's `FormControl` component plus react-maskedinput's `MaskedInput` component.

Simple example:

```javascript
import MaskedFormControl from 'react-bootstrap-maskedinput'

export default class MyForm extends React.Component {
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
* yarn (optional/recommended)

### Setup

1. Clone the repository (`git clone git@github.com:schneidmaster/react-bootstrap-maskedinput.git`)
2. Install dependencies: `npm install` or `yarn install`

### Testing

Run `npm run example` or `yarn example` and open [http://localhost:8080](http://localhost:8080). Make changes in `src/index.js` or try different setups in `example/index.js`.

### Deployment

1. Run `npm run build` or `yarn build` to build an ES5 version of the class.

## Contributing

1. Fork it ( https://github.com/schneidmaster/react-bootstrap-maskedinput/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## License

MIT
