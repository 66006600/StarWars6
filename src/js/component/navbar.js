import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown2 from "./Dropdown";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3 container">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Bootstrap" width="100" height="70" />
			</Link>

			<div className="ml-auto">
				{/* <Link to="/demo">
					<button className="btn bg-dark text-warning">Favorites</button>
				</Link> */}
				<Dropdown2 />
			</div>
		</nav>
	);
};