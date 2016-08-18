import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className={ this.props.active ? "modal is-active" : "modal is-hidden" }>
      	{ for (var i in this.props.item ) => i }
      </div>
    );
  }
}

export default Modal;