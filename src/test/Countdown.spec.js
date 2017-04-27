import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';


import Countdown from '../components/Countdown';
import Clock from '../components/Clock';

describe('Countdown', () => {
  it('has prop: deadline', () => {
    const wrapper = shallow(<Countdown deadline="December 25, 2017" />);
    expect(wrapper.props().deadline).to.be.defined;
  });

  describe('behavior', () => {
    let now, clock, wrapper;

    beforeEach(() => {
      now     = new Date(1493330832893);
      clock   = sinon.useFakeTimers(now.getTime());
      wrapper = mount(<Countdown deadline="December 25, 2017" />);
    });

    afterEach(() => {
      clock.restore();
    });

    it('displays correct time until deadline', () => {
      expect(wrapper.state().days).to.equal(241);
      expect(wrapper.state().hours).to.equal(9);
      expect(wrapper.state().minutes).to.equal(52);
      expect(wrapper.state().seconds).to.equal(48);

      clock.restore();
    });

    it('counts down time till deadline', () => {
      clock.tick(4000);
      expect(wrapper.state().seconds).to.equal(44);
    });

    it('renders Clock component with correct time until deadline', () => {
      const clockComponent = wrapper.find(Clock);
      expect(clockComponent.props().days).to.equal(241);
      expect(clockComponent.props().hours).to.equal(9);
      expect(clockComponent.props().minutes).to.equal(52);
      expect(clockComponent.props().seconds).to.equal(48);
    });
    
  });
});