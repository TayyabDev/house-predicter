import React from "react";

import "./styles.css";

/* The Home Component */
class Home extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
    	<form>
    		<div className="header">
        		<h2 class="text">Household Income Predictor</h2>
      		</div>

      		<br></br>

      		<form>
	      		<label>Search For Area You Are Interested In:</label>
	      		<br></br>
            <br></br>
	      		<input type="text" placeholder="Enter City"/>
	      		<br></br>
	      		<br></br>
            <input id="submit" type="submit"/>
            <br></br>
            <br></br>

	      	</form>
      	</form>

    );
  }
}

export default Home;