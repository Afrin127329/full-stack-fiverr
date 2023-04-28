import React, { useRef, useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import "./Gigs.scss";

const Gigs = () => {
	const [open, setOpen] = useState(false);
	const [sort, setSort] = useState("sales");
	const minRef = useRef();
	const maxRef = useRef();

	const resort = (type) => {
		setSort(type);
		setOpen(false);
	};

	const apply = () => {
		console.log(minRef.current.value);
		console.log(maxRef.current.value);
	};

	return (
		<div className="gigs">
			<div className="container">
				<span className="breadcrumbs">
					Liverr &gt; Graphics & Design &gt;
				</span>
				<div className="breadcrumbs"></div>
				<h1>AI Artists</h1>
				<p>
					Explore the boundaries of art and technology with Liverr's AI
					artists
				</p>

				<div className="menu">
					<div className="left">
						<span>Budget</span>
						<input type="number" ref={minRef} placeholder="min" />
						<input type="number" ref={maxRef} placeholder="max" />
						<button onClick={apply}>Apply</button>
					</div>
					<div className="right">
						<span className="sortBy">Sort by: </span>
						<span className="sortType">
                {sort === "sales" && "Best Selling"}
                {sort === "createdAt" && "Newest"}
                {sort === "popular" && "Popular"}
						</span>

						<img
							src="./img/down.png"
							alt="down"
							onClick={() => setOpen(!open)}
						/>
						{open && (
							<div className="rightMenu">
								{sort === "sales" && (
									<>
										<span onClick={() => resort("createdAt")}>
											Newest
										</span>
										<span onClick={() => resort("popular")}>
											Popular
										</span>
									</>
								)}
								{sort === "createdAt" && (
									<>
										<span onClick={() => resort("sales")}>
											Best Selling
										</span>
										<span onClick={() => resort("popular")}>
											Popular
										</span>
									</>
								)}
								{sort === "popular" && (
									<>
										<span onClick={() => resort("sales")}>
											Best Selling
										</span>
										<span onClick={() => resort("createdAt")}>
											Newest
										</span>
									</>
								)}
							</div>
						)}
					</div>
				</div>

				<div className="cards">
					{gigs.map((gig) => (
						<GigCard key={gig.id} item={gig} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Gigs;
