import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	return (
		<div class="jumbotron m-5">
			<h1 class="display-4">{props.title}</h1>
			<p class="lead">{props.description}</p>
			<a
				class="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonText: PropTypes.string,
};
