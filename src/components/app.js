import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <br/>
        <center>
          <h1>ReactJs, Redux Weather App</h1> <br/><br/>
          <h2>Technologies Used:</h2>
          <h4>ReactJs, REDUX, Redux Promise, React Google Maps, React Sparklines Charts and OpenWeatherMap API etc</h4>
        </center>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
