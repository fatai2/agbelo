import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';


const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home"
},{
  route: "/search",
  icon: faSearch,
  label: "Search"
},{
  route: "/profile",
  icon: faUserCircle,
  label: "Profile"
}]

const Navigation = (props) => {
return (
	<div>
		<nav className="navbar navbar-expand-md navbar-light d-none d-lg-block fixed-top" role="navigation">
			<div className="container-fluid">
				<NavLink to="/home">
					<Button color="link" className="navbar-brand">
						<img src={logo} className="img-responsive" alt="" />
						Agbelo
					</Button>	
				</NavLink>	
				<Nav className="ml-auto">
				  <NavItem>
					<NavLink to="/search" className="nav-link">
					  Search
					</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink to="/profile" className="nav-link">
					  Profile
					</NavLink>
				  </NavItem>
				</Nav>
			</div>
		</nav>
		<nav className="navbar navbar-expand-md navbar-light bg-light d-block d-lg-none fixed-top" role="navigation">
			<div className="container-fluid">
				<Button color="link" className="navbar-brand" onClick={props.click} > 
					<img src={logo} className="img-responsive" alt="" />
					Agbelo
				</Button>
			</div>
		</nav>
		<nav className="navbar fixed-bottom navbar-light bg-light d-block d-lg-none bottom-tab-nav" role="navigation">
			<Nav className="w-100">
			  <div className=" d-flex flex-row justify-content-around w-100">
				{
				  tabs.map((tab, index) =>(
					<NavItem key={`tab-${index}`}>
					  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
						<div className="row d-flex flex-column justify-content-center align-items-center">
						  <FontAwesomeIcon size="lg" icon={tab.icon}/>
						  <div className="bottom-tab-label">{tab.label}</div>
						</div>
					  </NavLink>
					</NavItem>
				  ))
				}
			  </div>
			</Nav>
		</nav>
	</div>
  )
};
export default Navigation;