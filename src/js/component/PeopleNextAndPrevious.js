import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleNextAndPrevious = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid row" style={{ display: "flex" }}>
			<h3 className="col-9">Character</h3>
			<div
				className="col-1 text-center nextAndPrevious"
				onClick={() => {
					actions.loadPeople(store.people.previous);
				}}>
				<i className="fas fa-arrow-left" />
			</div>
			<div
				className="col-1 text-center nextAndPrevious"
				onClick={() => {
					actions.loadPeople(store.people.next);
				}}>
				<i className="fas fa-arrow-right" />
			</div>
		</div>
	);
};
