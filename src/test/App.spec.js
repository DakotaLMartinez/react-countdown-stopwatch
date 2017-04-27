import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../components/App';
import Countdown from '../components/Countdown';

describe('App', () => {
  it('has state: deadline, with initial value: December 25, 2017', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state().deadline).to.equal('December 25, 2017');
  });

  it('has state: newDeadline, with initial value: ""', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state().newDeadline).to.equal('');
  });

  describe('behavior', () => {
    let wrapper, instance;
    
    beforeEach(() => {
      wrapper  = mount(<App/>);
      instance = wrapper.instance();
    });

    it('can change the countdown deadline', () => {
      wrapper.setState({
        newDeadline: 'November 25, 2017'
      });
      instance.changeDeadline();
      expect(wrapper.state('deadline')).to.equal('November 25, 2017');
    });

    it('passes deadline to Countdown component', () => {
      const CountdownComponent = wrapper.find(Countdown);
      expect(CountdownComponent.props().deadline).to.equal('December 25, 2017');
    });
    
  });
  
});