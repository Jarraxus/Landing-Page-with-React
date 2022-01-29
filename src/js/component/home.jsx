import React from "react";

// import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
// import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Jumbotron
				title="Welcome to react"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				buttonLabel="Call to action!"
				buttonURL="https://google.com/"
			/>
		</div>
	);
};

export default Home;
