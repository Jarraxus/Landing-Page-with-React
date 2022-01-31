import React from "react";
import PropTypes from "prop-types";

// Cards function

export const Cards = (props) => {
	return (
		<div class="container">
			<div class="card-deck row">
				<div class="col-sm px-0 mx-2 g-5 card">
					<img
						class="card-img-top"
						src={props.firstImage}
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">{props.firstTitle}</h5>
						<p class="card-text">{props.firstDescription}</p>
					</div>
					<div class="card-footer ">
						<form action={props.firstUrl}>
							<button type="submit" class="btn btn-primary mx-5">
								{props.firstLabel}
							</button>
						</form>
					</div>
				</div>
				<div class="col-sm px-0 mx-2 g-5 card">
					<img
						class="card-img-top"
						src={props.secondImage}
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">{props.secondTitle}</h5>
						<p class="card-text">{props.secondDescription}</p>
					</div>
					<div class="card-footer">
						<form action={props.secondUrl}>
							<button type="submit" class="btn btn-primary mx-5">
								{props.secondLabel}
							</button>
						</form>
					</div>
				</div>
				<div class="col-sm px-0 mx-2 g-5 card">
					<img
						class="card-img-top"
						src={props.thirdImage}
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">{props.thirdTitle}</h5>
						<p class="card-text">{props.thirdDescription}</p>
					</div>
					<div class="card-footer">
						<form action={props.thirdUrl}>
							<button type="submit" class="btn btn-primary mx-5">
								{props.thirdLabel}
							</button>
						</form>
					</div>
				</div>
				<div class="col-sm px-0 mx-2 g-5 card">
					<img
						class="card-img-top"
						src={props.fourthImage}
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">{props.fourthTitle}</h5>
						<p class="card-text">{props.fourthDescription}</p>
					</div>
					<div class="card-footer">
						<form action={props.fourthUrl}>
							<button type="submit" class="btn btn-primary mx-5">
								{props.fourthLabel}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

// // propTypes for Cards

Cards.propTypes = {
	firstImage: PropTypes.string,
	firstTitle: PropTypes.string,
	firstDescription: PropTypes.string,
	firstUrl: PropTypes.string,
	firstLabel: PropTypes.string,
	secondImage: PropTypes.string,
	secondTitle: PropTypes.string,
	secondDescription: PropTypes.string,
	secondUrl: PropTypes.string,
	secondLabel: PropTypes.string,
	thirdImage: PropTypes.string,
	thirdTitle: PropTypes.string,
	thirdDescription: PropTypes.string,
	thirdUrl: PropTypes.string,
	thirdLabel: PropTypes.string,
	fourthImage: PropTypes.string,
	fourthTitle: PropTypes.string,
	fourthDescription: PropTypes.string,
	fourthUrl: PropTypes.string,
	fourthLabel: PropTypes.string,
};
