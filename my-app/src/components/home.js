import React from "react";

import "./styles.css";
import Map from './Map';

/* The Home Component */
class Home extends React.Component {

  // document.getElementById("submit").addEventListener("click", getIncome);

  

  render() {
    const { title, subtitle } = this.props;

    return (
    	<div>
    		<div className="header">
        		<h2 class="text">Household Income Predictor</h2>
      		</div>

      		<br></br>

      		<form onSubmit={this.getIncome}>
	      		<label>Search For Area You Are Interested In:</label>
	      		<br></br>
	      		<br></br>
            <div class="map">
              <Map />
            </div>
            <br></br>
            <label>The area you have chosen is: </label>
            <br></br>
            <br></br>
            <input id="submit" type="submit"/>
            <br></br>
            <br></br>

	      	</form>
      	</div>

    );
  }
}

export default Home;

function getIncome() {
  console.log("Hello World");
}
//   e.preventDefault();
//   //get cooordinates

// }

