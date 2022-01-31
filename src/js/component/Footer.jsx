import React from "react";
import PropTypes from "prop-types";

// Footer function

export const Footer = (props) => {
	return (
		<div className="bg-dark mt-5 mb-0">
			<p className="text-white p-4 text-center mb-0">
				<a href="https://github.com/Jarraxus">
					Copyright &copy; {props.owner} {props.date}
				</a>
			</p>
		</div>
	);
};

// propTypes for Footer

Footer.propTypes = {
	owner: PropTypes.string,
	date: PropTypes.string,
};
