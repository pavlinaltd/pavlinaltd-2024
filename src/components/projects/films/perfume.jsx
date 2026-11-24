import React, { useEffect, useState } from "react";
import "./perfume.css";

import Poster from "../../../assets/films/posters/Promise_of_perfume_poster.jpg";
import ImdbIcon from "../../../assets/common/imdbna.png";
import Modal from "react-bootstrap/Modal";

const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
	return (
		<Modal
			show={isOpen}
			onHide={closeModal}
			centered
			dialogClassName="modal-lg"
		>
			<Modal.Header closeButton>
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="perfume-modal-img-wrap">
					<img
						src={Poster}
						alt="The Promise of Perfume"
						className="perfume-modal-img"
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
};

const Perfume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [isMRS, setIsMRS] = useState(false);

	return (
		<main className="main-margin">
			<div className="perfume-page">
				{/* Trailer */}
				<section className="perfume-video">
					<div className="ratio ratio-16x9">
						<iframe
							src="https://www.youtube.com/embed/FTYZccfLaZY"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				</section>

				{/* IMDb link */}
				<div className="perfume-imdb">
					<span className="perfume-imdb-label">Visit</span>
					<a
						href="https://www.imdb.com/title/tt0368133/?ref_=nm_knf_t_1"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={ImdbIcon}
							alt="IMDb"
							className="img hoverable-img perfume-imdb-icon"
						/>
					</a>
				</div>

				{/* Poster + text */}
				<section className="perfume-content">
					<div className="perfume-poster-col">
						<img
							src={Poster}
							alt="The Promise of Perfume"
							className="perfume-poster"
							onClick={() => setIsMRS(true)}
						/>
					</div>

					<div className="perfume-desc-col">
						<p>
							<strong>The Promise of Perfume </strong>
							is a one-hour documentary shot in Provence, Tunisia,
							Bulgaria, French Guyana, Paris and New York.
							Featuring perfume industry notables, including
							Jacques Polge of Chanel, the five-time FIFI
							award-winning bottle designer, Marc Rosen, and the
							perfume critic of the New York Times, Chandler Burr.
							This is a film about women's love affair with
							perfume and the lasting power of scent. The tagline
							reads: "Every perfume a woman wears is composed of
							two ingredients: scent and passion."
						</p>

						<p>
							The film's story line incorporates numerous video
							clips and perfume ad images that were made available
							to the producer by Dior, Chanel, Elizabeth Arden,
							Coty, Victor and Rolf, Givenchy, Guerlain, Gucci,
							Marc Jacobs, Thierry Mugler, Lancome and much more.
						</p>

						<p>
							Written, directed and produced by Pavlina Proevska,
							under her production banner Pavlina Ltd, the film is
							intended for TV distribution worldwide. The US
							distributor is PBS. <em>La Cinquième</em> in France
							and sales companies such as <em>From The Fence</em>{" "}
							in the Netherlands, <em>Beyond Distribution</em> in
							the UK, <em>RAI</em> in Italy and{" "}
							<em>Content Films</em> in Canada are interested in
							distribution.
						</p>

						<p>
							The Promise of Perfume brings the art and science of
							scent closer to world audiences in a refreshing
							manner that combines the "how to" of perfume with
							the poetry of this liquid that has often been called
							the essence of illusion.
						</p>
					</div>
				</section>

				{isMRS && (
					<FutureFilmRiceModal
						isOpen={isMRS}
						closeModal={() => setIsMRS(false)}
					/>
				)}
			</div>
		</main>
	);
};

export default Perfume;
