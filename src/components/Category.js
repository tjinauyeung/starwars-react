import React, { Component } from 'react';
import { Link } from 'react-router';

class Category extends Component {

 render() {
    return (
      <Link to={"/category/" + this.props.name }>
        <div className={ this.props.gridView ? 'gridView' : 'tableView' }>
          <h2>{this.props.name}</h2>
          <h2>{this.props.value}</h2>
        </div>
      </Link>
    );
  }
}

export default Category;
