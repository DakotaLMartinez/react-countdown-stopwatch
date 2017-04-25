import React, { Component, PropTypes } from 'react';
import Clock from './Clock';

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      days: 0,
      hours: 0, 
      minutes: 0, 
      seconds: 0,
    }
  }
  static propTypes = {
    active: PropTypes.bool.isRequired,
    startTime: PropTypes.number
  };

  componentWillMount() {
    this.updateTimes(this.state.time);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.active) {
      this.interval = setInterval(() => this.getTimeElapsed(this.props.startTime), 100);
    } else {
      clearInterval(this.interval);
      this.setState({
        time: this.convertCurrentTimeToMilliseconds()
      })
    }
  }

  getTimeElapsed(startTime) {
    const time    = this.state.time + Date.parse(new Date()) - startTime;
    this.updateTimes(time);
  }

  updateTimes(time) {
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours   = Math.floor((time/1000/60/60) % 24);
    const days    = Math.floor((time/1000/60/60/24));
    this.setState({ days, hours, minutes, seconds });
  }

  convertCurrentTimeToMilliseconds() {
    return this.state.seconds * 1000 +
    this.state.minutes * 1000 * 60 +
    this.state.hours   * 1000 * 60 * 60 + 
    this.state.days    * 1000 * 60 * 60 * 24;
  }
  
  render() {
    return (
      <div>
        <Clock 
          colonView
          days={this.state.days}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds} />

      </div>
    );
  }
}

Stopwatch.defaultProps = {
  startTime: Date.parse(new Date())
};

export default Stopwatch;