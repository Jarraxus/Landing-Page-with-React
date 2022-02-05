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
			firstSlot="Home"
			firstUrl="#"
			secondSlot="Study Music"
			secondUrl="https://www.youtube.com/watch?v=VPT3ysdU5JY"
			thirdSlot="Why Money Laws have to Change"
			thirdUrl="https://mkorostoff.github.io/1-pixel-wealth/"
			fourthSlot="Adult Link"
			fourthUrl="https://static.wikia.nocookie.net/zelda/images/c/ca/Link_Artwork_2_%28Twilight_Princess%29.png"
		/>
		<Jumbotron
			title="It's Time to Code!"
			description="Learning to code is difficult, but with the right preparation you can do it! Here is my personal daily practice to make it through the course. Hopefully it helps you as much as it helped me!"
			buttonUrl="https://4geeksacademy.com/"
			buttonText="Go to 4Geeks Academy!"
		/>
		<div className="card-deck row">
			<Cards
				Image="https://picsum.photos/id/0/200/300"
				Title="Step 1"
				Description="Prepare you workspace with everything you'll need for your project. Headphones, refreshments, references, etc."
				Url="https://nymag.com/strategist/article/best-work-from-home-essentials.html"
				Label="Do you have these?"
			/>
			<Cards
				Image="https://picsum.photos/id/1/200/300"
				Title="Step 2"
				Description="Study hard and code harder! It's time to put your skills and brainpower to the test to complete you projects!"
				Url="https://learn.breatheco.de/login"
				Label="Get crackin'!"
			/>
			<Cards
				Image="https://picsum.photos/id/2/200/300"
				Title="Step 3"
				Description="Stare blankly into the infinite void that is the workload, spiraling into a existential crisis. But fear not, you can do it!"
				Url="https://www.youtube.com/watch?v=qztuEucrNBc"
				Label="You can do it!"
			/>
			<Cards
				Image="https://picsum.photos/id/3/200/300"
				Title="Step 4"
				Description="Get distracted by Reddit and lose track of time. That way when you remember your task, you can hyperfocus and finish quickly due to panic."
				Url="https://reddit.com"
				Label="Go to Reddit now!"
			/>
		</div>
		<Footer owner="Jarraxus" date="2022" />
	</div>,
	document.querySelector("#app")
);
