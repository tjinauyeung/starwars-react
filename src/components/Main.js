import React, { Component } from 'react';
import jQuery from 'jquery';
import Category from './Category';

class Main extends Component {
	constructor(){
    super();

    this.state = {
      categories: {},
      gridView: true
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

  changeView(){
  	this.setState({
  		gridView: !this.state.gridView
  	})
  	console.log(this.state.gridView);
  }

  render() {
    return (
      <div>
      	<h1>Select a category</h1>
      	<button onClick={this.changeView.bind(this)}>Grid or Table</button>
      	{ Object.keys(this.state.categories).map(key =>
				    <Category key={key} name={key} value={this.state.categories[key]} gridView={this.state.gridView} />
				)}
      </div>
    );
  }
}

export default Main;
