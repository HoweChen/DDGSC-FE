import React, { Component } from 'react';
import CreativeRegister from './components/CreativeRegister';

export default class Signup extends Component {
  static displayName = 'Signup';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="signup-page">
        <CreativeRegister />
      </div>
    );
  }
}
