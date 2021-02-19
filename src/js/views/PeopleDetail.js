import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid);
	useEffect(
		() => {
			actions.loadPeopleDetail(params.theid);
		},
		[params.theid]
	);
	return (
		!!store.peopleDetail && (
			<div className="detailContainer">
				<div className="card mb-3" style={{ display: "flex", flexDirection: "row", border: "none" }}>
					<div className="row g-0">
						<div className="col-md-6" style={{ display: "flex" }}>
							<img
								src="https://hipertextual.com/files/2011/09/Star-Wars.jpg"
								className="img-fluid"
								alt=" "
							/>
						</div>

						<div className="col-md-6 card-body" style={{ display: "flex", flexDirection: "column" }}>
							<h1 className="card-title" style={{ display: "flex", flexDirection: "row" }}>
								{store.peopleDetail.properties.name}
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
								<h4>Birth Year</h4>
							</div>
							<div className="col detailText">
								<h4>Gender</h4>
							</div>
							<div className="col detailText">
								<h4>Height</h4>
							</div>{" "}
							<div className="col detailText">
								<h4>Skin color</h4>
							</div>
							<div className="col detailText">
								<h4>Eye color</h4>
							</div>
						</div>
						<div className="row">
							<div className="col detailText">{store.peopleDetail.properties.name}</div>
							<div className="col detailText">{store.peopleDetail.properties.birth_year}</div>
							<div className="col detailText">{store.peopleDetail.properties.gender}</div>
							<div className="col detailText">{store.peopleDetail.properties.height}</div>
							<div className="col detailText">{store.peopleDetail.properties.skin_color}</div>
							<div className="col detailText">{store.peopleDetail.properties.eye_color}</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
