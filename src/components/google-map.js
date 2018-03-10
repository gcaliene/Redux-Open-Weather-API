import React, { Component } from 'react';

class GoogleMap extends Component {
  //lifecycle method that gets called automatically after being rendered
  componentDidMount() {
    //https://developers.google.com/maps/documentation/javascript/reference/3/ reference to google.maps.Map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    //this.ref.map will get me a direct reference to this map
    return <div ref="map" />;
  }
}

export default GoogleMap;
