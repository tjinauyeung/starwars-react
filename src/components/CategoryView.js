import React, { Component } from 'react';
import Switch from './Switch';
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
    	<section>        
        <Switch 
          view={this.state.gridView} 
          handleChange={this.changeView.bind(this)}
        />
      	
        <div className={ this.state.gridView ? 'category category--grid' : 'category category--table' }>
	    		
          { this.state.items.map((item, index) =>
				    <div key={index} className="category__item">
				    	<div className="category__image"></div>
				    	<div className="category__info">
                <h2>{item.name}</h2>
                <p>{item.info}</p>
                <p>{item.name}</p>
                <p>{item.name}</p>
              </div>
				   	</div>
					)}

				</div>
    	</section>
    );
  }
}

export default CategoryView;
