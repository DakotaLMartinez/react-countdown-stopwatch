import React, { Component, PropTypes } from 'react';

class Clock extends Component {
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

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours   = Math.floor((time/1000/60/60) % 24);
    const days    = Math.floor((time/1000/60/60/24));
    this.setState({ days, hours, minutes, seconds });
  }
  
  render() {
    return (
      <div>
        <span className="mh1" id="Clock-days">{this.state.days} days</span>
        <span className="mh1" id="Clock-hours">{this.state.hours} hours</span>
        <span className="mh1" id="Clock-minutes">{this.state.minutes} minutes</span>
        <span className="mh1" id="Clock-seconds">{this.state.seconds} seconds</span>
      </div>
    );
  }
}

// for docs on prop type validations type `reactvalidateproptypedocs`

export default Clock;