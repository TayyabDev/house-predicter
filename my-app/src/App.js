import React from 'react';
import './App.css';
import Map from './components/Map';
import Home from './components/home';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    	<Home/>
    	<div class="map">
    		<Map />
    	</div>
    </div>
  )
}

export default App

