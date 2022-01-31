import React from "react";
import PropTypes from "prop-types";

// Jumbostron function

export const Jumbotron = (props) => {
	return (
		<>
			<br />
			<br />

			<div class="container">
				<div class="mt-5 p-5  bg-light text-dark rounded">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
					<a
						class="btn btn-primary btn-lg"
						href={props.buttonURL}
						role="button">
						{props.buttonText}
					</a>
				</div>
			</div>
		</>
	);
};

// propTypes for Jumbotron

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonText: PropTypes.string,
};
