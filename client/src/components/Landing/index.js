//https://github.com/ksentak/react-user-auth

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
	render() {
		return (
			<div className="container col-12">
				<div className="jumbotron jumbotron-fluid col-12 text-center">
					<h2>Welcome to Plot of Gold!</h2>
					<h5>Click REGISTER or LOGIN to begin.</h5>

					{/* Links to Register & Login */}
				<div className="row d-flex justify-content-center">
					<div className="col-sm-12 text-center">
						{/* Register */}
						<Link to="/register" className="btn registerButton">Register</Link>

						{/* Login */}
						<Link to="/login" className="btn loginButton">Login</Link>
					</div>
				</div>
			</div>
				</div>

				
		);
	}
}
export default Landing;