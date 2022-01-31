import React from "react";
import PropTypes from "prop-types";

// Navbar function

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Landing Page
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href={props.firstUrl}>
							{props.firstSlot}{" "}
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href={props.secondUrl}>
							{props.secondSlot}
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href={props.thirdUrl}>
							{props.thirdSlot}
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href={props.fourthUrl}>
							{props.fourthSlot}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

// propTypes for Navbar

Navbar.propTypes = {
	firstSlot: PropTypes.string,
	firstUrl: PropTypes.string,
	secondSlot: PropTypes.string,
	secondUrl: PropTypes.string,
	thirdSlot: PropTypes.string,
	thirdUrl: PropTypes.string,
	fourthSlot: PropTypes.string,
	fourthUrl: PropTypes.string,
};
