import React, { Component, PropTypes } from 'react';
import Clock from './Clock';

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0, 
      hours: 0, 
      minutes: 0, 
      seconds: 0
    }
  }
  static propTypes = {
    deadline: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  componentWillUnmount() {
    // clean up side effects introduced in componentDidMount
    clearInterval(this.interval);
  }

  getTimeUntil(deadline) {
    const time    = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours   = Math.floor((time/1000/60/60) % 24);
    const days    = Math.floor((time/1000/60/60/24));
    this.setState({ days, hours, minutes, seconds });
  }
  
  render() {
    return (
      <Clock 
        days={this.state.days}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds} />
    );
  }
}

export default Countdown;