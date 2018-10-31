import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapGL, { Marker } from 'react-map-gl';
import Geosuggest from 'react-geosuggest';
import CityPin from './components/CityPin';
import {defaultMapStyle} from './styles/map-style.js';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './actions/weatherAction';
import './styles/App.css';
import './styles/geosuggest.css';

const TOKEN = "pk.eyJ1IjoiemlkYWJhaCIsImEiOiJjam51ZjE3N2QwM3VqM3dudnl5dXoyb213In0.wPZNMnjjPWu6zN4aHPjg2w";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyle: defaultMapStyle,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
  }

  render() {
    const { viewport, latCity, longCity, mapStyle } = this.state;

    return (
      <div className="App">
        <div className="fixed-search">
          <Geosuggest
            placeholder="Поиск на карте"
            onViewportChange={this.updateViewport}
            onSuggestSelect={this.onSuggestSelect}
            location={new window.google.maps.LatLng(53.558572, 9.9278215)}
            radius={20} />
          <WeatherDisplay />
        </div>
        <MapGL
          {...viewport}
          mapStyle={mapStyle}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.onViewportChange(viewport)}
          style={{ textAlign: 'left' }}
        >
        {latCity && longCity &&
          <Marker
            latitude={latCity}
            longitude={longCity}
            key="marker"
          >
            <CityPin size={20} />
          </Marker>
        }
        </MapGL>
      </div>
    );
  }

  updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  onViewportChange = (viewport) => {
    this.setState({
      viewport: {
        ...viewport
      }
    })
  };

  onSuggestSelect = (suggest) => {
    if (suggest) {
      const { description, location } = suggest;

      this.getWeather(description);
      this.setState({
          viewport: {
            ...this.state.viewport,
            zoom: 12,
            latitude: location.lat,
            longitude: location.lng,
          },
          latCity: location.lat,
          longCity: location.lng
      });
    }
  }
  
  getWeather = (description) => {
    this.props.fetchWeather(description);
  }

}

const mapStateToProps = store => {
  return {
    store: store
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: description => dispatch(fetchWeather(description))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);