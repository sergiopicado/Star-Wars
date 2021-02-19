import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="groupOfCards">
			{!!store.planets &&
				store.planets.results.map((item, index) => {
					return (
						<div key={item.uid} className="singleCard">
							<div className="card cardWidth">
								<img
									src="https://static.tumblr.com/853f9ead0def42cc5d04776a94ef8123/8ov2a35/Opvn4dhsh/tumblr_static_3o9jgb38b9k4ggskkcwgwgo0w.jpg"
									className="card-img-top"
									alt=" "
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>

									<div className="linkAndLike">
										<Link className="btn btn-outline-danger" to={"/planetsdetail/" + item.uid}>
											Learn more!
										</Link>
										<button
											type="button"
											className="btn btn-warning likeButton"
											onClick={() => {
												actions.addFavorites(item);
											}}>
											<i className="fas fa-heart fa-1x heartFavorite" />
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};
