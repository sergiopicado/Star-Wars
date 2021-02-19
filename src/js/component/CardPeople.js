import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPeople = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="groupOfCards">
			{!!store.people &&
				store.people.results.map((item, index) => {
					return (
						<div key={item.uid} className="singleCard">
							<div className="card cardWidth">
								<img
									src="https://www.infobae.com/new-resizer/HW5B6NK0o6D3-T6HrR2DhO_W8MQ=/768x432/filters:format(jpg):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/03220850/dia-internacional-de-star-wars.jpg"
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
										<Link className="btn btn-outline-danger" to={"/peopledetail/" + item.uid}>
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
