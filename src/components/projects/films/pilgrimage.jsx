import React, { useEffect, useState } from "react";
import "./pilgrim.css";

import Poster from "../../../assets/films/posters/my-american-pilgrimage.jpg";
import MFA from "../../../assets/films/posters/mff.png";
import ImdbIcon from "../../../assets/common/imdbna.png";
import Book from "../../../assets/films/bookcover0602.png";
import Modal from "react-bootstrap/Modal";

const ImageModal = ({ isOpen, closeModal, src, alt }) => (
	<Modal show={isOpen} onHide={closeModal} centered size="lg">
		<Modal.Header closeButton />
		<Modal.Body className="pg-modal-body">
			<img src={src} alt={alt} className="pg-modal-img" />
		</Modal.Body>
	</Modal>
);

const Pilgrimage = () => {
	const [isPosterOpen, setIsPosterOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="pg-page">
			{/* Video */}
			<section className="pg-video">
				<iframe
					src="https://www.youtube.com/embed/uNeB23OKaE8"
					title="My American Pilgrimage trailer"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</section>

			{/* IMDb */}
			<div className="pg-imdb">
				<span>Visit</span>
				<a
					href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_t_7_prd"
					target="_blank"
					rel="noreferrer"
				>
					<img src={ImdbIcon} alt="IMDb" className="pg-imdb-icon" />
				</a>
			</div>

			{/* Credits */}
			<section className="pg-credits">
				<div className="pg-credits-grid">
					<div className="pg-credit-block">
						<h2 className="pg-credit-title">CAST</h2>
						<p>Dimitar Ginovski as young Stoyan</p>
						<p>Senator Stoyan Christowe</p>

						<h2 className="pg-credit-title pg-credit-title--spaced">
							PRODUCED - WRITTEN - DIRECTED
						</h2>
						<p>Pavlina Proevska</p>
					</div>

					<div className="pg-credit-block">
						<h2 className="pg-credit-title">INTERVIEWEES</h2>
						<p>Former Senator Robert T. Gannet</p>
						<p>John Pollack</p>
						<p>Prof. Andrew Rossos</p>
						<p>Norman Runnion</p>
						<p>Gane Todorovski</p>
					</div>
				</div>

				<div className="pg-credit-block pg-credit-block--wide">
					<h2 className="pg-credit-title">EXECUTIVE PRODUCER</h2>
					<p>THE MACEDONIAN ARTS COUNCIL©</p>
				</div>

				<div className="pg-credit-block pg-credit-block--wide">
					<h2 className="pg-credit-title">WITH THE SUPPORT OF</h2>
					<div className="pg-support">
						<span className="pg-support-name">
							The John M. Bissell Foundation
						</span>
						<img
							src={MFA}
							alt="Macedonian Film Fund logo"
							className="pg-support-logo"
						/>
						<span className="pg-support-name">
							The Macedonian Film Fund
						</span>
					</div>
				</div>
			</section>

			{/* Poster / Book / Bio */}
			<section className="pg-feature">
				<button
					type="button"
					className="pg-card pg-card--poster"
					onClick={() => setIsPosterOpen(true)}
					aria-label="Enlarge the My American Pilgrimage poster"
				>
					<img src={Poster} alt="My American Pilgrimage poster" />
				</button>

				<a
					className="pg-card pg-card--book"
					href="https://www.barnesandnoble.com/w/this-is-my-country-stoyan-christowe/1145041072;jsessionid=B5E387529B0A4A27376A85283C2D1922.prodny_store02-atgap07?ean=2940159021229"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={Book}
						alt="This Is My Country: A semi autobiographical novel by Stoyan Christowe"
					/>
					<span className="pg-card-label">Read Now</span>
				</a>

				<div className="pg-bio">
					<p>
						<em>Stoyan Christowe </em>
						was a journalist, author and a politician. Born in
						Ottoman Macedonia in 1898, he immigrated to the United
						States in 1911 with a burning desire to be an American's
						American. He came of age on the Great Plains and went on
						to be a well-known journalist, critic and lover of the
						English language. In all, he wrote six books, numerous
						short stories and articles. He ended his career as a
						Vermont State Representative and then a Senator.
					</p>
					<p>
						Stoyan Christowe remained passionate about his adopted
						country throughout his life and is remembered as a
						staunch defender of the democratic way. His is a
						quintessential American immigrant story that will be
						remembered through an endowment fund in support of
						students of literature and political science, in his
						native Macedonia and the documentary film{" "}
						<em>My American Pilgrimage</em>.
					</p>
				</div>
			</section>

			<ImageModal
				isOpen={isPosterOpen}
				closeModal={() => setIsPosterOpen(false)}
				src={Poster}
				alt="My American Pilgrimage poster"
			/>
		</main>
	);
};

export default Pilgrimage;
