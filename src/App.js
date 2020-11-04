import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/marker-icon-2x-green.png';



class App extends Component {


  constructor() {
    super()
    var locations=document.getElementById("data").innerText
    locations=locations.split(";")
    var lat=locations[0].split(",")[0]
    var lng=locations[0].split(",")[1]
    this.state={
        center_lat : lat,
        center_lon : lng,
        zoom: 25,
        lat : lat,
        lng : lng
    };

  }

  state = {
    greenIcon: {
      lat: 35.787449,
      lng: -78.6438197,
    },
    zoom:25
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    iconSize:     [38,50],
    popupAnchor:  [-3, -76]
  });


  render(){
    const positionGreenIcon = [this.state.lat, this.state.lng];
    console.log("positionGreenIcon , : ",positionGreenIcon)
    return (
        <div>

            <div className="navbar navbar-default navbar-static-top navbar-shadow" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><b>U</b>nite<b>A</b>nd<b>H</b>elp</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">

                            <li><a href="/"><strong>Home</strong></a></li>
                            <li><a href="/"><strong>Profile</strong></a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={positionGreenIcon} icon={this.grenIcon}>
                  <Popup>
                  I am a green leaf
                  </Popup>
                </Marker>
            </Map>

        </div>
    );
  }
}

export default App;