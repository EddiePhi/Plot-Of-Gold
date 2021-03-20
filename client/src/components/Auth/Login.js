// https://github.com/ksentak/react-user-auth

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import './Login.css';


class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to home
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/about");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			// Push user to home when they login
			this.props.history.push("/about");
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	};
	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col returnHome">
						<Link to="/" className="link">
							<div className="row">
								<div style={{paddingRight: "5px"}} className="col-1 float-right">
									<i className="fas fa-backspace float-right"></i>
								</div>
								<div style={{padding: "0px"}} className="col-3">
									<p className="textLink" style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Return Home</p>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center loginText">
						<h3 style={{fontFamily: "'Press Start 2P', cursive"}}>Log in below</h3>
						<p style={{fontFamily: "'Press Start 2P', cursive", fontSize: "13px"}}>Don't have an account? <Link to="/register" className="link"><p className="textLink" style={{fontFamily: "'Press Start 2P', cursive", fontSize: "13px"}}>Click here to register</p></Link></p>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center">
						<form noValidate onSubmit={this.onSubmit}>
							{/* Email */}
							<div className="col-8 offset-2">
								<label htmlFor="email" style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Email:</label>
								<span className="text-danger">{errors.email} {errors.emailnotfound}</span>
								<input
									style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}
									type="email"
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									className={classnames("form-control", { 
										invalid: errors.email || errors.emailnotfound 
									})}
									placeholder="Enter your email..."
								/>
							</div>

							{/* Password */}
							<div className="col-8 offset-2">
								<label htmlFor="password" style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Password:</label>
								<span className="text-danger">{errors.password} {errors.passwordincorrect}</span>
								<input
									style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}
									type="password"
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									className={classnames("form-control", {
										invalid: errors.password || errors.passwordincorrect
									})}
									placeholder="Enter your password..."
								/>
							</div>

							{/* Submit button */}
							<div className="col-8 offset-2">
								<button style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}} className="btn loginbtn" type="submit">
									Log In
			 	  				</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);