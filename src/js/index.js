//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Navbar } from "./component/Navbar.jsx";
import { Jumbotron } from "./component/Jumbotron.jsx";
import { Cards } from "./component/Cards.jsx";
import { Footer } from "./component/Footer.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navbar
			first="Home"
			second="Study Music"
			third="Why Money Laws have to Change"
			fourth="Adult Link"
		/>
		<Jumbotron
			title="It's Time to Code!"
			description="Learning to code is difficult, but with the right preparation you can do it! Here is my personal daily practice to make it through the course. Hopefully it helps you as much as it helped me!"
			buttonUrl="https://4geeksacademy.com/"
			buttonText="Go to 4Geeks Academy!"
		/>
		<Cards
			firstImage="https://picsum.photos/id/0/200/300"
			firstTitle="Step 1"
			firstDescription="Prepare you workspace with everything you'll need for your project. Headphones, refreshments, references, etc."
			firstUrl="https://nymag.com/strategist/article/best-work-from-home-essentials.html"
			firstLabel="Do you have these?"
			secondImage="https://picsum.photos/id/1/200/300"
			secondTitle="Step 2"
			secondDescription="Study hard and code harder! It's time to put your skills and brainpower to the test to complete you projects!"
			secondUrl="https://learn.breatheco.de/login"
			secondLabel="Get crackin'!"
			thirdImage="https://picsum.photos/id/2/200/300"
			thirdTitle="Step 3"
			thirdDescription="Stare blankly into the infinite void that is the workload, spiraling into a existential crisis. But fear not, you can do it!"
			thirdUrl="https://www.youtube.com/watch?v=qztuEucrNBc"
			thirdLabel="You can do it!"
			fourthImage="https://picsum.photos/id/3/200/300"
			fourthTitle="Step 4"
			fourthDescription="Get distracted by Reddit and lose track of time. That way when you remember your task, you can hyperfocus and finish quickly due to panic."
			fourthUrl="https://reddit.com"
			fourthLabel="Go to Reddit now!"
		/>
		<Footer owner="Jarraxus" date="2022" />
	</div>,
	document.querySelector("#app")
);
