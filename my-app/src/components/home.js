import React from "react";

import "./styles.css";

/* The Home Component */
class Home extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
    	<div>
    		<div className="header">
        		<mark>Household Income Predictor</mark>
      		</div>

      		<br></br>

      		<form>
	      		<label>Enter your Income (Before Tax):</label>
	      		<br></br>
	      		<input type="text" placeholder="Household Income"/>
	      		<br></br>
	      		<br></br>
	      		<label>Enter your preferred city of residence:</label>
	      		<br></br>
	      		<input type="text" placeholder="City"/>
	      		<br></br>
	      		<br></br>
            <input type="submit"/>
            <br></br>
            <br></br>

	      	</form>
      	</div>

    );
  }
}

export default Home;