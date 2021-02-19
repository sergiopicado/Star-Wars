import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid);
	useEffect(
		() => {
			actions.loadPlanetsDetail(params.theid);
		},
		[params.theid]
	);
	return (
		!!store.planetsDetail && (
			<div className="detailContainer">
				<div className="card mb-3" style={{ display: "flex", flexDirection: "row", border: "none" }}>
					<div className="row g-0">
						<div className="col-md-6">
							<img
								src="https://images.wallpaperscraft.com/image/planet_space_satellite_134444_800x600.jpg"
								className="img-fluid"
								alt=" "
							/>
						</div>
						<div className="col-md-6 card-body" style={{ display: "flex", flexDirection: "column" }}>
							<h1 className="card-title" style={{ display: "flex", flexDirection: "row" }}>
								{store.planetsDetail.properties.name}
							</h1>
							<p className="card-text" style={{ display: "flex", flexDirection: "row" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</div>
				<footer
					className="footer mt-auto py-3 text-center"
					style={{ display: "flex", flexDirection: "row", borderTop: "solid 2px red" }}>
					<div className="container">
						<div className="row">
							<div className="col detailText">
								<h4>Name</h4>
							</div>
							<div className="col detailText">
								<h4>Diameter</h4>
							</div>
							<div className="col detailText">
								<h4>Gravity</h4>
							</div>
							<div className="col detailText">
								<h4>Population</h4>
							</div>{" "}
							<div className="col detailText">
								<h4>Climate</h4>
							</div>
							<div className="col detailText">
								<h4>Terrain</h4>
							</div>
						</div>
						<div className="row">
							<div className="col detailText">{store.planetsDetail.properties.name}</div>
							<div className="col detailText">{store.planetsDetail.properties.diameter}</div>
							<div className="col detailText">{store.planetsDetail.properties.gravity}</div>
							<div className="col detailText">{store.planetsDetail.properties.population}</div>
							<div className="col detailText">{store.planetsDetail.properties.climate}</div>
							<div className="col detailText">{store.planetsDetail.properties.terrain}</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
