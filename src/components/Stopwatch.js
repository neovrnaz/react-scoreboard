import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0,
      previousTime: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    const { previousTime, isRunning } = this.state;
    if (isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - previousTime),
      }));
    }
  };

  handleStopWatch = () => {
    const { isRunning } = this.props;
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const { elapsedTime, isRunning } = this.state;
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{Math.floor(elapsedTime / 1000)}</span>
        <button type="button" onClick={this.handleStopWatch}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Stopwatch;
