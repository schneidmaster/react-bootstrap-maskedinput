import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactBootstrapMaskedInput from '../src';

describe('Component', () => {
  it('renders correctly with basic props', () => {
    const wrapper = mount(
      <ReactBootstrapMaskedInput
        mask='111-111-1111'
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('passes complex props through to FormControl and MaskedInput', () => {
    const wrapper = mount(
      <ReactBootstrapMaskedInput
        bsClass='my-form-control'
        bsSize='large'
        id='my-id'
        inputRef={ref => ref}
        mask='111-111-1111'
        placeholder='555-555-5555'
        size={10}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
