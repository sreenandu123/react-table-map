

import React, { Component } from 'react';
import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
// import { initialState } from './actions';
import { LoadScript } from '@react-google-maps/api';
import "./map.scss";

class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      INDIA_CORDS: { lat: 20.5937, lng: 78.9629 },
    };
  }

  setRef = (ref) => {
    this.googleMap = ref;
  }

  render() {
    const { INDIA_CORDS } = this.state;
    const { markers } = this.props;
    return (
      <LoadScript id="script-loader" googleMapsApiKey={''}>
        <div className="map-section">
        {markers && markers.length && <GoogleMap id="example-map" mapContainerStyle={{ height: '600px', width: '100%' }} zoom={7} center={INDIA_CORDS} onLoad={(map) => this.setRef(map)} onClick={this.props.onClick || false} mapTypeId={this.props.mapTypeId}>
            {markers.map(marker => <Marker position={marker.coordinates} /> )}
            {markers.map(marker => <Circle center={marker.coordinates} options={{ radius: Number(marker.radius) }} />)}
          </GoogleMap>}
         </div>
    </LoadScript>);
  }
}

export default MapComponent;
