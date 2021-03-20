// https://github.com/ksentak/react-user-auth

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import './style.css';

class Dashboard extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		console.log(this.props)
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center dashboardText">
						{/* <h3>Hey there, {user.name.split(" ")[0]}!</h3> */}
						<h3 style={{fontFamily: "'Press Start 2P', cursive", fontSize: "15px"}}>Click below to logout</h3>
						<button onClick={this.onLogoutClick} className="btn logoutbtn" style={{marginTop: "10px"}}><p style={{fontFamily: "'Press Start 2P', cursive", margin: "0px"}}>Logout</p></button>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);