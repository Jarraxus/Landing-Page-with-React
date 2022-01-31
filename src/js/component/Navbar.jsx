import React from "react";
import PropTypes from "prop-types";

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
						<a class="nav-link" href="#">
							{props.first} <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="https://www.youtube.com/watch?v=VPT3ysdU5JY">
							{props.second}
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="https://mkorostoff.github.io/1-pixel-wealth/">
							{props.third}
						</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="https://static.wikia.nocookie.net/zelda/images/c/ca/Link_Artwork_2_%28Twilight_Princess%29.png">
							{props.fourth}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

// // propTypes for Navbar

Navbar.propTypes = {
	first: PropTypes.string,
	second: PropTypes.string,
	third: PropTypes.string,
	fourth: PropTypes.string,
};
