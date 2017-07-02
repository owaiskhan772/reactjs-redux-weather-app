import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return(
      <form onSubmit={ this.onFormSubmit.bind(this) } className="input-group">
        <input
          className="form-control"
          placeholder="Search your favourite cities to get a five-day forecast e.g. Islamabad"
          value={ this.state.term }
          onChange={ this.onInputChange.bind(this) }
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: (city) => dispatch(fetchWeather(city))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
