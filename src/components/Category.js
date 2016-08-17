import React, { Component } from 'react';

class Category extends Component {

 render() {
    if (this.props.gridView) {
      return (
        <div style={{ display: 'inline-block'}}>
          <h2>{this.props.name}</h2>
          <h2>{this.props.value}</h2>
        </div>
      );
    }
    if (!this.props.gridView) {
      return (
        <div style={{ display: 'table'}}>
          <h2>{this.props.name}</h2>
          <h2>{this.props.value}</h2>
        </div>
      );
    }
  }
}

export default Category;
