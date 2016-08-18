import React, { Component } from 'react';

class Switch extends Component {

  render() {
    return (
    	<div className="Switch">
      	<div className={ this.props.view ? "Switch__button grid" : "Switch__button list" } onClick={this.props.handleChange} />
      </div>
    );
  }
}

export default Switch;
