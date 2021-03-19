// https://github.com/ksentak/react-user-auth

import React, {Component} from "react";
import OurNavbar from "./components/OurNavbar";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/HomePage/homePage";
import ForumPage from "./pages/ForumPage";
import ForumPost from "./pages/ForumPost";
import ForumCreate from "./pages/ForumCreate";

// Auth Template
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";


// import logo from "./logo.svg";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds

	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "./login";
	}
}



class App extends Component {
	render() {

		return (
			<Provider store={store}>
				<Router>
						<OurNavbar />
						<div className="App">
							{/* <Route exact path="/login" component={LoginPage} />
							<Route exact path="/signup" component={SignupPage} /> */}
							<Route exact path="/" component={Landing} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Switch>
								<PrivateRoute exact path="/logout" component={Dashboard} />
								<PrivateRoute exact path="/about" component={AboutPage} />
								<PrivateRoute exact path="/home" component={Homepage} />
								<PrivateRoute exact path="/forum" component={ForumPage} />
								<PrivateRoute exact path="/forumPost" component={ForumPost} />
								<PrivateRoute exact path="/forumCreate" component={ForumCreate} />
							</Switch>
						</div>
					
				</Router>
			</Provider>
		);
	}	
}
export default App;

