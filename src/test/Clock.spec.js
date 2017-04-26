import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Clock from '../components/Clock';

describe('Clock', () => {
  it('renders tags: 4 spans containing days, hours, minutes and seconds', () => {
    const wrapper = shallow(<Clock/>);
    expect(wrapper.find('span')).to.have.length(4);
  });

  it('has function: leading0', () => {
    const wrapper = shallow(<Clock/>);
    const leading0 = wrapper.instance().leading0
    expect(leading0).to.be.defined;
    expect(leading0(3)).to.equal('03');
    expect(leading0(12)).to.equal('12');
  });

  it('has prop: days, with default value: 0', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.props().days).to.equal(0);
  });

  it('has prop: hours, with default value: 0', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.props().hours).to.equal(0);
  });

  it('has prop: minutes, with default value: 0', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.props().minutes).to.equal(0);
  });

  it('has prop: seconds, with default value: 0', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.props().seconds).to.equal(0);
  });
});