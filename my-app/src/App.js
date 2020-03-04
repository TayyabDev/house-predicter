import React from 'react';
import './App.css';
import Map from './components/Map';
import Home from './components/home';
import MapComponent from './components/Map';


function App() {
  return (
    <div>
		<div className="header">
			<h2 class="text">Household Income Predictor</h2>
		</div>
		<Map/>
    </div>
  )
}

export default App

