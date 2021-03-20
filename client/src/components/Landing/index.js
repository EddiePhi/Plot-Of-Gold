//https://github.com/ksentak/react-user-auth

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
	render() {
		return (
			<div style={{color: "white", marginTop: "75px"}} className="container col-12">
				<div className="col-12 text-center">
					<h2 style={{fontFamily: "'Press Start 2P', cursive"}}>Welcome to Plot of Gold!</h2>
					<h5 style={{fontFamily: "'Press Start 2P', cursive", margin: "10px"}}>Click REGISTER or LOGIN to continue.</h5>

					{/* Links to Register & Login */}
				<div className="row d-flex justify-content-center" style={{margin: "30px"}}>
					<div className="col-sm-12 text-center">
						{/* Register */}
						<Link to="/register" className="btn registerButton"><p style={{fontFamily: "'Press Start 2P', cursive", margin:"5px"}}>Register</p></Link>

						{/* Login */}
						<Link to="/login" className="btn loginButton"><p style={{fontFamily: "'Press Start 2P', cursive", margin: "5px"}}>Login</p></Link>
					</div>
				</div>
			</div>
				</div>

				
		);
	}
}
export default Landing;