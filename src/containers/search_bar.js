import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  // All DOM event handlers like onclick, onchange, onhover, onscroll have an event object
  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value }); //"this" needs to bind!!!!
  }

  //Form tag offers functionality so use it and just remember to prevent default
  onFormSubmit(event) {
    event.preventDefault();
    //we need to fetch the weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
