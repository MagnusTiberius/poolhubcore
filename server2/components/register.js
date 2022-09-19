import React, { useState } from 'react';

export default class RegisterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="login-wrapper">
      <h1>Registration</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <label>
          <p>Enter Password Again</p>
          <input type="password2" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>It is {this.state.date.toLocaleTimeString()}.</p>
    </div>
    );
  }
}
