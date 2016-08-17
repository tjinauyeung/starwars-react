import React, { Component } from 'react';

class Category extends Component {

 render() {
    return (
      <div className={ this.props.gridView ? 'gridView' : 'tableView' }>
        <h2>{this.props.name}</h2>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

export default Category;
