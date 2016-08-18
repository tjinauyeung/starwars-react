import React, { Component } from 'react';
import jQuery from 'jquery';
import CategoriesPanel from './CategoriesPanel';

class Main extends Component {
	constructor(){
    super();

    this.state = {
      categories: {}
    };
  }

	reload(event) {
    let component = this;

    jQuery.getJSON("http://swapi.co/api/?format=json", function(categories){
    	if (typeof categories !== 'object') {
    		return;
    	}
      
    	component.setState({
  			categories: categories
  		}); 
    });
  }

  componentDidMount() {
    this.reload();
  }

  render() {
    return (
      <div className="container">
      	<h1 className="categories__heading">Select a category</h1>
      	<section className="categories__container">
      	  { Object.keys(this.state.categories).map((category, index) =>
				    <CategoriesPanel key={index} category={category} />
				  )}
				</section>
      </div>
    );
  }
}

export default Main;
