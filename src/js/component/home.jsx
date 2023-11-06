import React from "react";
import Newnavbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer"
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Newnavbar />
			<Jumbotron />
			<div className="cards_row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
