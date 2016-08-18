import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={ this.props.loading ? "loader is-loading" : "loader is-hidden"}></div>
    );
  }
}

export default Loader;
