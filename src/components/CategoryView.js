import React, { Component } from 'react';
import Switch from './Switch';
import Loader from './Loader';
import jQuery from 'jquery';

class CategoryView extends Component {
	constructor(){
    super();

    this.state = {
    	items: [],
      gridView: true,
      isLoading: true,
      detailsView: false
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
    		items: data.results,
        isLoading: false
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

  openModal(){
    return (
      <div className="modal" style={{width: '500px', height: '500px', background: 'yellow', position: 'fixed', left: 0, top: 0 }}>
        {console.log('got it')}
        Where's my modal??
      </div>
    )
  }

  render() {
    return (
    	<section>

        <Loader loading={this.state.isLoading} />

        <div className="categories__heading"><h1>Selected Category: <span>{this.props.params.categoryId}</span></h1></div>
        
        <Switch 
          view={this.state.gridView} 
          handleChange={this.changeView.bind(this)}
        />
      	
        <div className={ this.state.gridView ? 'category category--grid' : 'category category--table' }>
	    		
          { this.state.items.map((item, index) =>
				    <div key={index} className="category__item" onClick={this.openModal.bind(this)}>
				    	<div className="category__image"></div>
				    	<div className="category__info">
                <h2>{item.name}</h2>
              </div>
				   	</div>
					)}

				</div>
    	</section>
    );
  }
}

export default CategoryView;
