import React, { useEffect, useState } from "react";

import MagicSnowmanImg from "../../../assets/films/the_magic_snowman.jpg";
import Poster from "../../../assets/films/SnowmanPoster.jpg";
// import Languages from "../../../assets/films/languages.png";
import ImdbIcon from "../../../assets/common/imdbna.png";
import Modal from "react-bootstrap/Modal";

import "./snowman.css";

const PosterModal = ({ isOpen, closeModal }) => (
	<Modal show={isOpen} onHide={closeModal} centered size="lg">
		<Modal.Header closeButton />
		<Modal.Body className="text-center">
			<img
				src={Poster}
				alt="The Magic Snowman poster"
				className="modal-poster"
			/>
		</Modal.Body>
	</Modal>
);
const MagicSnowman = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [isMRS, setIsMRS] = useState(false);

	// const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
	// 	return (
	// 		<Modal
	// 			show={isOpen}
	// 			onHide={closeModal}
	// 			centered
	// 			dialogClassName="modal-lg"
	// 		>
	// 			<Modal.Header closeButton>
	// 				<Modal.Title></Modal.Title>
	// 			</Modal.Header>
	// 			<Modal.Body>
	// 				<section className="d-flex align-items-center modal-flex">
	// 					<div className="future-film-col">
	// 						<img
	// 							src={Poster}
	// 							alt="The Magic Snowman Returns"
	// 							className="future-film-img"
	// 						/>
	// 					</div>
	// 				</section>
	// 			</Modal.Body>
	// 		</Modal>
	// 	);
	// };

	return (
		<main className="main-margin" id="magic-snowman-page">
			<div>
				<section
					className="snowman-trailer-section"
					id="snowman-trailer"
				>
					<div className="hnn-trailer" id="snowman-trailer-media">
						<div
							className="trailer-poster"
							id="snowman-trailer-poster"
						>
							<img
								src={MagicSnowmanImg}
								alt="Magic Snowman Poster"
							/>
						</div>
						<div
							className="ratio ratio-16x9 snowman-trailer-video"
							id="snowman-trailer-video"
						>
							<iframe
								src="https://www.youtube.com/embed/aE3pq0ygwjo"
								title="The Magic Snowman trailer"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</section>
				<div className="imdb-row" id="snowman-imdb">
					{" "}
					<span>Visit</span>
					<a
						href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_t_7_prd"
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

				<section
					className="snowman-feature margin-main"
					id="snowman-feature"
				>
					<div className="snowman-poster-col" id="snowman-poster-col">
						<img
							src={Poster}
							alt="Magic Snowman poster"
							className="snowman-poster-img"
							onClick={() => setIsMRS(true)}
						/>
					</div>
					<div className="snowman-details" id="snowman-details">
						{" "}
						<p>
							<span className="snowman-bold">
								{" "}
								The Magic Snowman
							</span>{" "}
							was produced in 1988 by Pavlina Ltd. in a
							co-production with FIT, a film production company
							based in the former Yugoslavia. Dedicated to the
							World’s children, the film was endorsed by UNICEF
							which received a portion of the film's revenues
							throughout its distribution life. The film’s
							storyline featuring the character of the magical
							snowman Lumi Ukko, caries a powerful message for
							children. Lumi Ukko travels the world with the help
							of his friend and lifelong companion, Gustella the
							wind, and teaches children valuable lessons about
							honesty, integrity, and determination. He teaches
							them to believe in themselves.
						</p>
						<p>
							Over a period of twelve years,{" "}
							<span className="snowman-italic">
								{" "}
								The Magic Snowman{" "}
							</span>{" "}
							has aired on The Disney Channel more than 38 times
							in children’s prime time slots. It is estimated that
							about twenty million children have seen the film in
							the United States alone. Miramax Films had worldwide
							TV distribution rights while the video rights were
							acquired by Artisan Entertainment. Among the major
							distributors who acquired the original film were{" "}
							<span className="snowman-italic">
								The Sky Channel
							</span>{" "}
							in the UK, Italy's{" "}
							<span className="snowman-italic">RAI Uno</span>, and
							Spain's{" "}
							<span className="snowman-italic">
								Television Española.
							</span>{" "}
							Sold worldwide in over thirty international markets,
							the film was a seasonal staple among children's
							television programs for seventeen years.
						</p>
					</div>
				</section>
				<PosterModal
					isOpen={isMRS}
					closeModal={() => setIsMRS(false)}
				/>
			</div>
		</main>
	);
};

export default MagicSnowman;
