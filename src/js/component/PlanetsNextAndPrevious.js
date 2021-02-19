import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetsNextAndPrevious = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid row" style={{ display: "flex" }}>
			<h3 className="col-9">Planets</h3>
			{/* Previous arrow */}
			<div
				className="col-1 text-center nextAndPrevious"
				onClick={() => {
					actions.loadPlanets(store.planets.previous);
				}}>
				<i className="fas fa-arrow-left" />
			</div>
			{/* Next arrow */}
			<div
				className="col-1 text-center nextAndPrevious"
				onClick={() => {
					actions.loadPlanets(store.planets.next);
				}}>
				<i className="fas fa-arrow-right" />
			</div>
		</div>
	);
};
