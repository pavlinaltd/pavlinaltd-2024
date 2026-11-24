import React, { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";

import Poem from "../../../assets/films/sun_text.png";
import Review from "../../../assets/films/between-reviewnew.png";
import BetweenTwoWorlds from "../../../assets/books/book_final.png";
import EnglishPoem from "../../../assets/audio/Sun_English_Mastered.wav";
import FrenchPoem from "../../../assets/audio/Sun_French_Mastered.wav";
import SerbianPoem from "../../../assets/audio/Sun_Serbian_Mastered.wav";
import AudioButton from "../../../assets/common/aud.png";

import "./between.css";

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
				<section className="d-flex align-items-center modal-flex">
					<div style={{ flex: "1", textAlign: "center" }}>
						<img
							src={BetweenTwoWorlds}
							alt="Between two worlds"
							className="future-film-img"
						/>
					</div>
				</section>
			</Modal.Body>
		</Modal>
	);
};
const Between = () => {
	const serbianPoemRef = useRef(null);
	const frenchPoemRef = useRef(null);
	const englishPoemRef = useRef(null);
	const [isMRS, setIsMRS] = useState(false);
	const [isVisibleEng, setIsVisibleEng] = useState(false); // State to track visibility
	const [isVisibleSun, setIsVisibleSun] = useState(false);
	const [isVisibleSol, setIsVisibleSol] = useState(false);

	const toggleVisibilityEng = () => {
		setIsVisibleEng(!isVisibleEng); // Toggle the visibility state
		setIsVisibleSun(false);
		setIsVisibleSol(false);
		frenchPoemRef.current.style.zIndex = 0;
		englishPoemRef.current.style.zIndex = 0;
		serbianPoemRef.current.style.zIndex = 100;
	};

	const toggleVisibilitySun = () => {
		setIsVisibleEng(false); // Toggle the visibility state
		setIsVisibleSun(!isVisibleSun);
		setIsVisibleSol(false);
		frenchPoemRef.current.style.zIndex = 0;
		englishPoemRef.current.style.zIndex = 100;
		serbianPoemRef.current.style.zIndex = 0;
	};

	const toggleVisibilitySol = () => {
		setIsVisibleEng(false); // Toggle the visibility state
		setIsVisibleSun(false);
		setIsVisibleSol(!isVisibleSol);
		frenchPoemRef.current.style.zIndex = 100;
		englishPoemRef.current.style.zIndex = 0;
		serbianPoemRef.current.style.zIndex = 0;
	};

	useEffect(() => {
		window.scrollTo(0, 0);

		// Function to pause all audios except the one currently playing
		const pauseOtherAudios = (currentAudioRef) => {
			[serbianPoemRef, frenchPoemRef, englishPoemRef].forEach(
				(audioRef) => {
					if (audioRef.current && audioRef !== currentAudioRef) {
						audioRef.current.pause();
					}
				},
			);
		};

		const onSerbian = () => pauseOtherAudios(serbianPoemRef);
		const onFrench = () => pauseOtherAudios(frenchPoemRef);
		const onEnglish = () => pauseOtherAudios(englishPoemRef);

		const serbianAudio = serbianPoemRef.current;
		const frenchAudio = frenchPoemRef.current;
		const englishAudio = englishPoemRef.current;

		serbianAudio?.addEventListener("play", onSerbian);
		frenchAudio?.addEventListener("play", onFrench);
		englishAudio?.addEventListener("play", onEnglish);

		return () => {
			serbianAudio?.removeEventListener("play", onSerbian);
			frenchAudio?.removeEventListener("play", onFrench);
			englishAudio?.removeEventListener("play", onEnglish);
		};
	}, []);

	return (
		<main className="film main-margin">
			<section className="margin-main pb-5">
				<div className="between-desc-section">
					<div className="fw-25">
						<div className="book-cover-box">
							<img
								src={BetweenTwoWorlds}
								alt="Between Two Worlds"
								className="book-cover"
								onClick={() => setIsMRS(true)}
							/>
						</div>
					</div>

					<div className="fw-75 orphan-desc">
						<p>
							<span className="title-bold">
								Between Two Worlds
							</span>{" "}
							is a collection of poems written by the
							Montenegrin-born poet Miodrag Milošević, whose life
							is the inspiration for a short docu/drama,{" "}
							<span className="title-italic">
								My Heart Is No Longer An Orphan
							</span>
							.
						</p>

						<p>
							The film tells the story of two young poets who fall
							in love at a poetry festival in Macedonia, in 1969
							where they spend three days that will mark them for
							the rest of their lives. Separated by a series of
							events that will keep them apart for the next fifty
							years, the poet, now 70-years old finds the girl.
							The poems in the book reflect his search and longing
							for something that he lost half a century ago.
						</p>

						<p>
							It was the poet's wish that the English and French
							translations be interpretations and not direct
							translations. In his words, "it should be the
							privilege of the readers to experience the verses
							mirroring their own feelings."
						</p>
						<p>
							The illustrations by Kathi Ha add a palpable feeling
							to the words on the page allowing the reader to
							catch a glimpse of the poet's dark and longing
							heart.
						</p>
						<p>Available on Amazon Books</p>
					</div>
				</div>
			</section>

			{/* <section
				className="mt-5 pb-5 margin-main"
				style={{ marginTop: "60px" }}
			>
				

				<div className="" style={{ position: "relative" }}>
					<img src={Poem} alt="Poem" className="img-fluid fluidImg" />
					<div className="between-overlay-sonce">
						<audio
							controls="controls"
							controlsList="nodownload noplaybackrate"
							ref={serbianPoemRef}
							style={{
								visibility: isVisibleEng ? "visible" : "hidden",
								position: "relative",
							}}
						>
							<source src={SerbianPoem} type="audio/wav" />
						</audio>
						<img
							src={AudioButton} // The image that when clicked will toggle the audio controller
							alt="Toggle Audio"
							onClick={toggleVisibilityEng}
							style={{
								cursor: "pointer",
								width: "25px",
								height: "25px",
							}} // Example styling
						/>
					</div>

					<div className="between-overlay-soleil audio-mobile">
					
						<audio
							controls="controls"
							controlsList="nodownload noplaybackrate"
							ref={frenchPoemRef}
							style={{
								visibility: isVisibleSol ? "visible" : "hidden",
								position: "relative",
							}}
						>
							<source src={FrenchPoem} type="audio/wav" />
						</audio>

						<img
							src={AudioButton} // The image that when clicked will toggle the audio controller
							alt="Toggle Audio"
							onClick={toggleVisibilitySol}
							style={{
								cursor: "pointer",
								width: "25px",
								height: "25px",
							}} // Example styling
						/>
					</div>

					<div className="between-overlay-sun audio-mobile">
						

						<img
							src={AudioButton} // The image that when clicked will toggle the audio controller
							alt="Toggle Audio"
							onClick={toggleVisibilitySun}
							style={{
								cursor: "pointer",
								width: "25px",
								height: "25px",
							}} // Example styling
						/>

						<audio
							controls="controls"
							controlsList="nodownload noplaybackrate"
							ref={englishPoemRef}
							style={{
								visibility: isVisibleSun ? "visible" : "hidden",
								position: "relative",
							}}
						>
							<source src={EnglishPoem} type="audio/wav" />
						</audio>
					</div>
				</div>
			</section> */}
			<section className="between-poem-section margin-main pb-5">
				<div className="poem-wrapper">
					<img src={Poem} alt="Poem" className="poem-img" />

					<button
						type="button"
						className="audio-icon audio-icon--sonce"
						onClick={toggleVisibilityEng}
						aria-label="Toggle Serbian reading"
					>
						<img src={AudioButton} alt="" />
					</button>

					<button
						type="button"
						className="audio-icon audio-icon--soleil"
						onClick={toggleVisibilitySol}
						aria-label="Toggle French reading"
					>
						<img src={AudioButton} alt="" />
					</button>

					<button
						type="button"
						className="audio-icon audio-icon--sun"
						onClick={toggleVisibilitySun}
						aria-label="Toggle English reading"
					>
						<img src={AudioButton} alt="" />
					</button>
				</div>

				<div className="poem-audio-bar">
					<audio
						className="poem-audio"
						controls
						controlsList="nodownload noplaybackrate"
						ref={serbianPoemRef}
						style={{
							visibility: isVisibleEng ? "visible" : "hidden",
						}}
					>
						<source src={SerbianPoem} type="audio/wav" />
					</audio>
					<audio
						className="poem-audio"
						controls
						controlsList="nodownload noplaybackrate"
						ref={frenchPoemRef}
						style={{
							visibility: isVisibleSol ? "visible" : "hidden",
						}}
					>
						<source src={FrenchPoem} type="audio/wav" />
					</audio>
					<audio
						className="poem-audio"
						controls
						controlsList="nodownload noplaybackrate"
						ref={englishPoemRef}
						style={{
							visibility: isVisibleSun ? "visible" : "hidden",
						}}
					>
						<source src={EnglishPoem} type="audio/wav" />
					</audio>
				</div>
			</section>

			<div className="review-wrap margin-main">
				<img src={Review} alt="Review" />
			</div>
			{isMRS && (
				<FutureFilmRiceModal
					isOpen={isMRS}
					closeModal={() => setIsMRS(false)}
				/>
			)}
		</main>
	);
};

export default Between;
