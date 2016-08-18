import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div>{console.log(this.props.item.name)}</div>
    );
  }
}

export default Modal;