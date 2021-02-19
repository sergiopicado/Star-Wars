import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardPeople } from "../component/CardPeople";
import { CardPlanets } from "../component/CardPlanets";
import { PeopleNextAndPrevious } from "../component/PeopleNextAndPrevious";
import { PlanetsNextAndPrevious } from "../component/PlanetsNextAndPrevious";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container-fluid home">
			{/* People */}
			<PeopleNextAndPrevious />
			<CardPeople />
			{/* Planets */}
			<PlanetsNextAndPrevious />
			<CardPlanets />
		</div>
	);
};
