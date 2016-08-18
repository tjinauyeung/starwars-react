import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoriesPanel extends Component {

 render() {
    return (
      <Link to={"/category/" + this.props.category }>
        <div className="categories__panel">
          <h2>{this.props.category}</h2>
        </div>
      </Link>
    );
  }
}

export default CategoriesPanel;
