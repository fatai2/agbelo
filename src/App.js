import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Navigation from './Navigation';

import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

import { 
	Button, 
  } from 'reactstrap';

function App() {
	
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	
	const drawerClickHandler = (prevState) => {
		prevState = sideDrawerOpen;
		setSideDrawerOpen(!prevState);
	};

	const backdropClickHandler = () => {
		setSideDrawerOpen(false);
	};
	
	useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

	return authState === AuthState.SignedIn && user ? (
		<div>
			<div>			
				<BrowserRouter>
					<Navigation click={drawerClickHandler}/>
					<Switch>
						<Route path="/home" component={Home}/>
						<Route path="/search" component={Search}/>
						<Route path="/profile" component={Profile}/>
					</Switch>
				</BrowserRouter>			
			</div>
		</div>
	): (
      <AmplifyAuthenticator>
        <AmplifySignUp
			slot="sign-up"
			usernameAlias="email"
			formFields={[
				{
					type: "name",
					label: "Name",
					placeholder: "Name",
					required: true,
				},
				{
					type: "email",
					label: "Email",
					placeholder: "Email",
					required: true,
				},
				{
					type: "password",
					label: "Password",
					placeholder: "must include UPPERCASE & numbers",
					required: true,
				},
				{
					type: "phone_number",
					label: "Phone Number",
					placeholder: "Pnone number (optional)",
					required: false,
				},
			]} 
		/>
      </AmplifyAuthenticator>
  );
}

export default App;

