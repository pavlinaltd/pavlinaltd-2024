import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import TheMagicSnowmanRedux from "../../assets/films/posters/redux-final.jpg";
import MyHeartIsNoLongerAnOrphan from "../../assets/films/posters/my-heart-is-no-longer-an-orphan.png";
import GustellaDances from "../../assets/films/posters/gustella-new.png";
import BetweenTwoWorlds from "../../assets/books/BetweenTwoWorlds.png";
// import TheMagicSnowmanAudiobook from "../../assets/films/posters/the-magic-snowman-audiobook.png";
import TheMagicSnowmanAudiobook from "../../assets/books/magicSnowman.jpg";
import BordersInHeaven from "../../assets/films/posters/borders in heaven.jpg";
import Keratza from "../../assets/films/posters/keratza-poster.jpeg";
import TheMagicSnowmanReturns from "../../assets/films/posters/The-Magic-Snowman-Returns.JPG";
import RiceMilk from "../../assets/films/R_M_Stilettos.jpg";

// import PreProductionFilm from "../../assets/films/posters/YOUR-PRE-PRODUCTION-POSTER.jpg";
// import PostProductionFilm from "../../assets/films/posters/YOUR-POST-PRODUCTION-POSTER.jpg";

import LanguagesVideo from "../../assets/films/learning.mp4";
import LanguagesThumbnail from "../../assets/films/practice.png";
import AmericanPilgrimageFilm from "../../assets/films/posters/my-american-pilgrimage.jpg";

import magicAudio from "../../assets/audio/The_Magic_Snowman.wav";

import header from "../../assets/brand/banner-new.jpg";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main>
			<div className="container-fluid">
				{/* header */}
				<section id="header-container" className="row p-0">
					<div className="header col-12 p-0 m-0">
						<img src={header} alt="Placeholder" />
					</div>
				</section>
			</div>
			<div className="container mx-auto p-0 m-0">
				{/* quote */}
				<section id="quote-container">
					<div className="intro col-12 p-3 p-xl-5 px-xl-0 m-0">
						<h3 className="p-0 px-xl-0 hidden">
							“Press on. Nothing in the world can take the place
							of persistence. Talent will not: nothing is more
							common than unrewarded talent. Education alone will
							not: the world is full of educated failures.
							Persistence alone is omnipotent.”{" "}
							<span className="float-end">Calvin Coolidge</span>
						</h3>
						{/* <p className="p-0 px-xl-5 text-end">Calvin Coolidge</p> */}
					</div>
				</section>
				{/* active productions */}
				<section className="home-section-padding">
					<div className="book-title-container">
						<h2 className="book-title">ACTIVE PRODUCTIONS</h2>
					</div>

					<div className="book-card">
						<div className="active-productions-row">
							{/* Film 1 */}
							<div className="book-image">
								<Link to="/the-magic-snowman-redux">
									<img
										src={TheMagicSnowmanRedux}
										className="img-fluid rounded-3"
										alt="The Magic Snowman Redux"
									/>
								</Link>
							</div>

							{/* Video and text */}
							<div className="production-video-card">
								<div className="production-video-text">
									<div className="fine-print">
										CONQUERING LANGUAGES <br />
										Sir Roger Moore at the Victorine
										Studios-1990, Nice
									</div>
								</div>
								<div className="production-video">
									<video
										controls
										title="PRACTICING LANGUAGES WITH SIR ROGER MOORE"
										poster={LanguagesThumbnail}
										allowFullScreen
										playsInline
										preload="metadata"
									>
										<source
											src={LanguagesVideo}
											type="video/mp4"
										/>
										Your browser does not support the video
										tag.
									</video>
								</div>
							</div>

							{/* Film 2 */}
							<div className="book-image">
								<Link to="/my-heart-is-no-longer-an-orphan">
									<img
										src={MyHeartIsNoLongerAnOrphan}
										className="img-fluid rounded-3"
										alt="My Heart Is No Longer An Orphan"
									/>
								</Link>
							</div>
						</div>
					</div>
				</section>
				{/* Pre-production and Post-production */}
				<section className="home-section-padding">
					<div className="production-status-row">
						{/* Post-production */}
						<div className="production-status-column">
							<div className="book-title-container">
								<h2 className="book-title">POST-PRODUCTION</h2>
							</div>

							<div className="book-card">
								<div className="active-productions-row">
									<div className="book-image">
										<a
											href="https://macedonianarts.org/video.html"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src={AmericanPilgrimageFilm}
												className="img-fluid rounded-3"
												alt="My American Pilgrimage"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* Pre-production */}
						<div className="production-status-column">
							<div className="book-title-container">
								<h2 className="book-title">PRE-PRODUCTION</h2>
							</div>

							<div className="book-card">
								<div className="active-productions-row">
									<div className="book-image">
										<Link to="/gustella-dances">
											<img
												src={GustellaDances}
												className="img-fluid rounded-3"
												alt="Gustella Dances"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* media projects */}

				<section className="home-section-padding">
					<div className="book-title-container">
						<h2 className="book-title">MEDIA PROJECTS</h2>
					</div>

					<div className="book-card">
						<div className="media-projects-row">
							{/* Poetry */}
							<div className="production-video-card">
								<div className="production-video-text">
									<div
										style={{
											fontSize: "11px",
											whiteSpace: "nowrap",
											lineHeight: 1.8,
										}}
									>
										<strong>Poetry read by</strong>
										<br />
										Lily Talevski
										<br />
										Toni Naumovski
										<br />
										Francis Dumaurier
									</div>
								</div>

								<div className="book-image poetry-book">
									<Link to="/between-two-worlds">
										<img
											src={BetweenTwoWorlds}
											alt="Between Two Worlds"
											className="img-fluid rounded-3"
										/>
									</Link>
								</div>
							</div>
							{/* Audiobook */}
							<div className="production-video-card">
								<div className="production-video-text">
									<div
										style={{
											fontSize: "16px",
											whiteSpace: "nowrap",
											lineHeight: 1.8,
										}}
									>
										Distributed by :{" "}
										<span style={{ fontStyle: "italic" }}>
											Authors' Republic
										</span>
									</div>
								</div>
								<div className="book-image audiobook-img">
									<img
										src={TheMagicSnowmanAudiobook}
										alt="The Magic Snowman Audiobook"
										className="img-fluid rounded-3"
									/>
								</div>

								<div className="production-video">
									<audio
										controls
										controlsList="nodownload noplaybackrate"
										style={{
											padding: 0,
											margin: 0,
											border: "none",
											height: "25px",
										}}
									>
										<source
											src={magicAudio}
											type="audio/wav"
										/>
										Your browser does not support the audio
										element.
									</audio>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* In development */}
				<section className="home-section-padding">
					<div className="book-title-container">
						<h2 className="book-title">
							IN DEVELOPMENT PRODUCTIONS{" "}
						</h2>
					</div>

					<div className="book-card">
						<div className="development-posters-row">
							<div className="book-image">
								<Link to="/in-development#borders-in-heaven">
									<img
										src={BordersInHeaven}
										className="img-fluid rounded-3"
										alt="Borders in Heaven"
									/>
								</Link>
							</div>

							<div className="book-image">
								<Link to="/in-development#keratza">
									<img
										src={Keratza}
										className="img-fluid rounded-3"
										alt="Keratza"
									/>
								</Link>
							</div>

							<div className="book-image">
								<Link to="/in-development#the-magic-snowman-returns">
									<img
										src={TheMagicSnowmanReturns}
										className="img-fluid rounded-3"
										alt="The Magic Snowman Returns"
									/>
								</Link>
							</div>

							<div className="book-image">
								<Link to="/in-development#rice">
									<img
										src={RiceMilk}
										className="img-fluid rounded-3"
										alt="Rice Milk"
									/>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* about */}

				<section
					className="home-about-section"
					style={{ marginBottom: "20px", margin: "20px" }}
				>
					<div className="intro col-12 p-0 py-md-4 pt-xl-0 px-xl-0 m-0">
						<h2
							className="p-0 home-about-text"
							style={{ textAlign: "center" }}
						>
							<span className="fst-italic">
								<strong>PAVLINA Ltd.</strong> is a New York
								based independent production company engaged in
								the development and production of feature films
								and documentaries. <br></br>{" "}
							</span>
							<span className="fst-italic">
								<strong>FilmsZaNas d.o.o.e.l.</strong>
							</span>{" "}
							is the company's co-producing partner in Macedonia.
						</h2>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
