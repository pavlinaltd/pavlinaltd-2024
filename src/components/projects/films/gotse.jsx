import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "./gotse_film.css";

import Poster from "../../../assets/films/posters/gotse-poster.jpg";
import GotseVideo from "../../../assets/films/short_film_1.mp4";

const Gotse = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="gotse-page">
			{/* Row 1: video only */}
			<section className="gotse-video">
				<ReactPlayer
					src={GotseVideo}
					controls
					playsInline
					preload="metadata"
					width="100%"
					height="100%"
				/>
			</section>

			{/* Row 2: title + credits */}

			<section className="pg-credits">
				<h1 className="pg-credits-heading">GOTSE (ГОЦЕ)</h1>

				<div className="pg-credits-grid">
					<div className="pg-credit-block">
						<h2 className="pg-credit-title">STARRING</h2>
						<p>
							Nenad Stojanovski as <em>Gotse</em>
						</p>
						<p>
							His Eminence <em>Bishop Kiril</em>
						</p>

						<h2 className="pg-credit-title pg-credit-title--spaced">
							DIRECTOR
						</h2>
						<p>Ivan Mitevski - Kopola</p>

						<h2 className="pg-credit-title pg-credit-title--spaced">
							WRITTEN BY
						</h2>
						<p>Goran Stefanovski</p>
					</div>

					<div className="pg-credit-block">
						<h2 className="pg-credit-title">PRODUCERS</h2>
						<p>Pavlina Proevska</p>
						<p>Mile Arsovski</p>

						<h2 className="pg-credit-title pg-credit-title--spaced">
							SHOOTING LOCATIONS
						</h2>
						<p>Skopje, Ohrid, Vevchani</p>
						<p>The Republic of Macedonia</p>
						<p>© 2007</p>
					</div>
				</div>

				<div className="pg-credit-block pg-credit-block--wide">
					<h2 className="pg-credit-title">PRODUCED BY</h2>
					<p>THE MACEDONIAN ARTS COUNCIL©</p>
				</div>
			</section>

			{/* Row 3: description + poster */}
			<section className="gotse-about">
				<p>
					This short film was commissioned by the Canadian-Macedonian
					Foundation on the occasion of a multimedia concert entitled{" "}
					<em>Oro Makedonsko-Our Canada</em> at the Toronto Convention
					Center in the spring of 1994 organized to celebrate the
					independence of the Republic of Macedonia.
				</p>

				<img
					src={Poster}
					alt="Gotse film poster"
					className="gotse-poster"
				/>

				<p>
					One of the show's components was a short live drama about
					the last five minutes in the life of Goce Delchev (ГОЦЕ
					ДЕЛЧЕВ), a national hero who is considered the father of
					modern Macedonia. The ten-minute short preceded the live
					segment.
				</p>
			</section>
		</main>
	);
};

export default Gotse;
