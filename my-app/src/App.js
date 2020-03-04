import React from 'react';
import './App.css';
import Map from './components/Map';
import Home from './components/home';
import MapComponent from './components/Map';


function App() {
  return (
    <div>
    	<Home/>
    	<div class="map">
    		<MapComponent />
    	</div>
    </div>
  )
}

export default App

