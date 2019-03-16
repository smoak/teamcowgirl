import React from 'react';
import App from '.';
import { ShallowWrapper, shallow } from 'enzyme';

describe('App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});
