import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
	return (
		<div className="app-header">
			<Link className="navbar-but" to="/">
				<div className="nav-text">
					Page 1
				</div>
			</Link>
			<Link className="navbar-but" to="/page2">
				<div className="nav-text">
					Page 2
				</div>
			</Link>
			<Link className="navbar-but" to="/page3">
				<div className="nav-text">
					Page 3
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
