import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
	return (
    <Link className="link" to='/gig/123'>
		<div className="gigCard">
			<img src={item.img} alt="card img" />
			<div className="info">
				<div className="user">
					<img src={item.pp} alt="profile picture" />
				<p>{item.username}</p>
				</div>
				<p>{item.desc}</p>
				<div className="star">
					<img src="./img/star.png" alt="star" />
					<span>{item.star}</span>
				</div>
			</div>
			<hr />
			<div className="detail">
        <img src="./img/heart.png" alt="heart" />
        <div className="price">
          <span>STARTING AT</span>
          <h2>${item.price} <sup>99</sup></h2>
        </div>
      </div>
		</div>
    </Link>
	);
};

export default GigCard;
