import React, { Component, PropTypes } from 'react';

class Clock extends Component {
  // add a constructor for state using 'reactstate'
  static propTypes = {
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired
  };

  leading0(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  
  render() {
    return (
      <div>
        <span className="mh1" id="Clock-days">   {this.leading0(this.props.days)} days</span>
        <span className="mh1" id="Clock-hours">  {this.leading0(this.props.hours)} hours</span>
        <span className="mh1" id="Clock-minutes">{this.leading0(this.props.minutes)} minutes</span>
        <span className="mh1" id="Clock-seconds">{this.leading0(this.props.seconds)} seconds</span>
      </div>
    );
  }
}

Clock.defaultProps = {
  days: 0, 
  hours: 0, 
  minutes: 0, 
  seconds: 0
};

export default Clock;