import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import "./styles.css"
// import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');




class MapComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      latitude: 39.8283,
      longitude: -98.5795,
      latitudeInput: 39.8283,
      longitudeInput: -98.5795,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    console.log("here")
    const {name, value} = event.target

    this.setState({
      [name] : value
    })
  }

  handleSubmit(){
    if(this.state.latitude !== null && this.state.longitude !== null && this.state.latitudeInput !== 0 && this.state.longitude !== 0){
      console.log("updating")
      this.setState({
        latitude: this.state.latitudeInput,
        longitude: this.state.longitudeInput
      });
    }
  }
  

  render(){
    return (
      <div>
        <Map /> 

      </div>
    );
  }
  
}




class Map extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      zip: '',
      viewport:  {
        width: 1118,
        height: 478,
        latitude: 39.8283,
        longitude: -98.5795,
        zoom: 4
        }
      }
      this.mapRef = React.createRef();
      this.handleViewportChange = this.handleViewportChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleViewportChange = (viewport) => {
    console.log("update")
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  componentDidMount(){
    const map = this.mapRef.current.getMap()

    const geocoder = new MapboxGeocoder({
      accessToken: 'pk.eyJ1IjoidGF5eWFiZGV2IiwiYSI6ImNrN2M0NW13ODBoMnIzbHFoYmR1Y2ZjdDYifQ.jNx0hMccnFqRtzvck4PLJQ',
      mapboxgl: map
    })

    map.addControl(geocoder);
    
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.viewport.longitude},${this.state.viewport.latitude}.json?access_token=pk.eyJ1IjoidGF5eWFiZGV2IiwiYSI6ImNrN2M0NW13ODBoMnIzbHFoYmR1Y2ZjdDYifQ.jNx0hMccnFqRtzvck4PLJQ`)
    .then(response => response.json())
            .then(data => {
                this.setState({
                    zip: data["features"][0]["place_name"]
                })
            })
    console.log(JSON.stringify(this.state.zip))
            // setTimeout(function(){ alert(this.state); }, 3000);
  }

  // shouldComponentUpdate(){
  //   console.log(this.state.chosenZipCode)
  //   return this.state.chosenZipCode === '' ? true : false;
  // }

  

  render(){
    return(
        <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken='pk.eyJ1IjoidGF5eWFiZGV2IiwiYSI6ImNrN2M0NW13ODBoMnIzbHFoYmR1Y2ZjdDYifQ.jNx0hMccnFqRtzvck4PLJQ'
          mapStyle='mapbox://styles/tayyabdev/ck7cc1mqe0bwm1is2mhq1k9qe'
          ref={this.mapRef}
          // onContextMenu={this.handleAddMarker}
          // mapStyle='mapbox://styles/mapbox/light-v10'
        >
          <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude}>
            <button className="marker-btn">
              <img src="https://clipartart.com/images/google-maps-marker-transparent-clipart.png" alt="Marker"/>
            </button>
          </Marker>
        </ReactMapGL>
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.zip!== '' && <h2>{this.state.zip}</h2>}
        </div>
      );
  }


}


// function Map(props) {
//   const [viewport, setViewport] = useState({
//     width: 1118,
//     height: 478,
//     latitude: props.latitude,
//     longitude: props.longitude,
//     zoom: 4
//   }); 


//   return (
//     <ReactMapGL
//       {...viewport}
//       onViewportChange={viewport => {
//         setViewport(viewport)
//       }}
//       mapboxApiAccessToken='pk.eyJ1IjoidGF5eWFiZGV2IiwiYSI6ImNrN2M0NW13ODBoMnIzbHFoYmR1Y2ZjdDYifQ.jNx0hMccnFqRtzvck4PLJQ'
//       mapStyle='mapbox://styles/tayyabdev/ck7cc1mqe0bwm1is2mhq1k9qe'
//       // mapStyle='mapbox://styles/mapbox/light-v10'
//     >
//       <Marker latitude={37.78} longitude={-122.41}>
//         <button className="marker-btn">
//           <img src="https://clipartart.com/images/google-maps-marker-transparent-clipart.png" alt="Marker"/>
//         </button>
//       </Marker>
//     </ReactMapGL>
//   );
// }

export default MapComponent