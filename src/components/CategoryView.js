import React, { Component } from 'react';
import jQuery from 'jquery';

class CategoryView extends Component {
	constructor(){
    super();

    this.state = {
    	items: [],
      gridView: true
    }
  }

	reload(event) {
    let component = this;
    let id = component.props.params.categoryId;

    jQuery.getJSON("http://swapi.co/api/" + id + "/?format=json", function(data){
    	if (typeof data !== 'object') {
    		return;
    	}
    	component.setState({
    		items: data.results
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
  }

  render() {
    return (
    	<div>
    		<h1>the category is: {this.props.params.categoryId}</h1>
      	<button 
      		className={ this.state.gridView ? "btn on" : "btn off" } 
      		onClick={ this.changeView.bind(this) }>
      		Grid or Table
      	</button>
      	<div className={ this.state.gridView ? 'category gridView' : 'category tableView' }>
	    		{ this.state.items.map((item, index) =>
					    <div key={index}>
					    	<div>{item.name}</div>
					    	<div>{item.name}</div>
					   	</div>
					)}
				</div>
    	</div>
    );
  }
}

export default CategoryView;
