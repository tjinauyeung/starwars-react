import React, { Component } from 'react';

class Modal extends Component {

  render() {

    return (
    	<div className={ this.props.active ? "modal__container is-active" : "modal__container is-hidden" } onClick={this.props.toggle}>
	      <div className="modal">

				{ Object.keys(this.props.item).map((key, index) =>
			    <h2 key={index}><strong>{key}:</strong> {this.props.item[key]}</h2>
			  )}

	      </div>
	   	</div>
    );
  }
}

export default Modal;