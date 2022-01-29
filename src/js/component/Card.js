import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
	return (
		<div class="card" style="width: 18rem;">
			<img class="card-img-top" src="..." alt="Card image cap"></img>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">{props.description}</p>
				<a href={props.buttonURL} class="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	cardImage: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonText: PropTypes.string,
};
