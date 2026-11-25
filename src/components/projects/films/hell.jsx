import React, { useEffect, useState } from "react";
import "./happyhellnight.css";

import Poster from "../../../assets/films/posters/happy-hell-night.png";
import Reel from "../../../assets/films/congress_fix.png";
import header from "../../../assets/films/hhnposter.webp";
import ImdbIcon from "../../../assets/common/imdbna.png";
import AudioImg from "../../../assets/common/podcasts.png";
import Modal from "react-bootstrap/Modal";

const MODAL_IMAGES = {
	poster: { src: Poster, alt: "Happy Hell Night poster" },
	reel: { src: Reel, alt: "Happy Hell Night still" },
};

const PosterModal = ({ imageId, onClose }) => {
	const img = MODAL_IMAGES[imageId];

	return (
		<Modal show={Boolean(img)} onHide={onClose} centered size="lg">
			<Modal.Header closeButton />
			<Modal.Body className="text-center">
				{img && (
					<img
						src={img.src}
						alt={img.alt}
						className="hh-modal-poster"
					/>
				)}
			</Modal.Body>
		</Modal>
	);
};

const Hell = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [activeImg, setActiveImg] = useState(null);

	return (
		<main className="hh-page">
			<img
				src={header}
				alt="Happy Hell Night banner"
				className="hh-banner"
			/>
			<div className="hh-actions">
				<div className="hh-action">
					<span>Visit</span>
					<a
						href="https://www.imdb.com/title/tt0236283/?ref_=nm_knf_t_4"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={ImdbIcon}
							alt="IMDb"
							className="hoverable-img"
						/>
					</a>
				</div>
				<div className="hh-action">
					<span>START LISTENING FROM 1:21:00 ONWARD</span>
					<a
						href="https://podcasts.apple.com/us/podcast/movie-melt-podcast-psychotronic-and-outsider-cinema/id1458025439?i=1000495807992"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={AudioImg}
							alt="Listen on Apple Podcasts"
							className="hoverable-img"
						/>
					</a>
				</div>
			</div>
			<div className="hh-container">
				<div className="hh-row">
					<img
						id="poster"
						src={Poster}
						alt="Happy Hell Night poster"
						className="hh-poster-img"
						onClick={(e) => setActiveImg(e.currentTarget.id)}
					/>
					<div className="hh-desc">
						<p>
							Twenty-five years ago at Winfield College,
							psycho-priest Zachary Malius murdered seven frat
							boys.
						</p>
						<p>
							Malius is waiting, secretly locked in Winfield
							Insane Asylum. Now, he's just a myth; the local
							boogie man, the sick joke used to scare children.
							Malius is not afraid to die; living has cured him of
							that. Sonny Collins, a star freshman student at
							Winfield College has nerves of steel and a taste for
							the heroics. He faces the ultimate Phi Delta Kappa
							hazing: photograph the mythical, monstrous Malius.
						</p>
						<p>
							Harry Collins, Sonny's brother, is already a Phi
							Delta Kappa. In a jealous rage and caught in a love
							triangle with Sonny's girl, Harry would like to even
							the score. He wants to scare his brother.
						</p>
						<p>
							But when Sonny finds Malius something goes wrong,
							Malius escapes. The horrors of his rampage, the
							mutilation of the Phi Delta Kappa brothers is
							recreated. But Malius is more than a psychotic
							killer, he is the devil's henchman brought back from
							the dead by Sonny and his father, Henry Collins
							(played by Darren Mc Gavin).
						</p>
						<p>
							Henry Collins tells his sons the truth; he sold his
							soul. He must prepare to help them outlive him.
						</p>
					</div>
				</div>

				<div className="hh-row hh-row--trailer">
					<img
						id="reel"
						src={Reel}
						alt="Happy Hell Night still"
						className="vid-img"
						onClick={(e) => setActiveImg(e.currentTarget.id)}
					/>

					<div className="hh-video">
						<iframe
							src="https://www.youtube.com/embed/n3ecJJ7jiFI?si=ivwsVdWxG23xS7km"
							title="Happy Hell Night trailer"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
			<PosterModal
				imageId={activeImg}
				onClose={() => setActiveImg(null)}
			/>{" "}
		</main>
	);
};

export default Hell;
