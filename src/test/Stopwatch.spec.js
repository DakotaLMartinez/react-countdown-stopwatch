import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Stopwatch from '../components/Stopwatch';

describe('Stopwatch', () => {
  it('has state: active, with initial value: false', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().active).to.equal(false);
  });

  it('has state: time, with initial value: 0', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().time).to.equal(0);
  });

  it('has state: days, with initial value: 0', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().days).to.equal(0);
  });

  it('has state: hours, with initial value: 0', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().hours).to.equal(0);
  });

  it('has state: minutes, with initial value: 0', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().minutes).to.equal(0);
  });

  it('has state: seconds, with initial value: 0', () => {
    const wrapper = mount(<Stopwatch/>);
    expect(wrapper.state().seconds).to.equal(0);
  });

  describe('behavior', () => {
    
    it('starts counting when start button is clicked', () => {
      const clock   = sinon.useFakeTimers();
      const wrapper = mount(<Stopwatch/>);
      const button  = wrapper.find('button#toggle');
      button.simulate('click');
      clock.tick(4000);
      expect(wrapper.state('seconds')).to.equal(4);
    });

    it('stops counting when stop button is clicked', () => {
      const clock   = sinon.useFakeTimers();
      const wrapper = mount(<Stopwatch/>);
      const button  = wrapper.find('button#toggle');
      button.simulate('click');
      clock.tick(4000);
      button.simulate('click');
      clock.tick(4000);
      expect(wrapper.state('seconds')).to.equal(4);
    });

    it('clears stopwatch when clear button is clicked', () => {
      const clock   = sinon.useFakeTimers();
      const wrapper = mount(<Stopwatch active startTime={clock.now} />);
      const button  = wrapper.find('button#clear'); 
      clock.tick(4000);
      button.simulate('click');
      expect(wrapper.state('seconds')).to.equal(0);
    });
  });
  
});