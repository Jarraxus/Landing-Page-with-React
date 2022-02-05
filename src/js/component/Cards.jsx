import React from "react";
import PropTypes from "prop-types";

// Cards function

export const Cards = (props) => {
	return (
		<div className="col-sm px-0 mx-2 g-5 card">
			<img
				className="card-img-top"
				src={props.Image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.Title}</h5>
				<p className="card-text">{props.Description}</p>
			</div>
			<div className="card-footer ">
				<form action={props.Url}>
					<button type="submit" class="btn btn-primary mx-5">
						{props.Label}
					</button>
				</form>
			</div>
		</div>
	);
};

// // propTypes for Cards

Cards.propTypes = {
	Image: PropTypes.string,
	Title: PropTypes.string,
	Description: PropTypes.string,
	Url: PropTypes.string,
	Label: PropTypes.string,
};
