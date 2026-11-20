import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./films.css";

import Poster from "../../../assets/films/posters/nade-poster.jpg";
import film from "../../../assets/films/nade-film.mp4";
import Modal from "react-bootstrap/Modal";

const NadeFilm = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [isMRS, setIsMRS] = useState(false);
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
								src={Poster}
								alt="Nade Proeva Film"
								className="future-film-img"
								style={{ width: "80%" }}
							/>
						</div>
					</section>
				</Modal.Body>
			</Modal>
		);
	};

	return (
		<main className="main-margin">
			<div>
				<section className="">
					<div>
						<div className="image-desc-flex">
							{/* Video Player */}
							<div style={{ width: "100%", height: "100%" }}>
								<div className="ratio ratio-16x9">
									<ReactPlayer
										src={film}
										controls
										playsInline
										width="100%"
										height="100%"
										style={{
											position: "absolute",
											top: 0,
											left: 0,
										}}
										config={{
											file: {
												attributes: {
													preload: "metadata",
												},
											},
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-4 margin-main">
					<div
						className="image-desc-flex"
						style={{ alignItems: "center" }}
					>
						<div className="fw-10 orphan-desc">
							<p>
								<span style={{ fontWeight: "bold" }}>
									Instead of a Hagiography{" "}
								</span>
								- A film that celebrates the woman who gave
								Macedonia back its ancient voice.
							</p>
							<br />
						</div>
						<div
							className="fw-30 mb-5"
							style={{ borderRadius: "12px" }}
						>
							<img
								src={Poster}
								alt="Nade Proeva Film"
								style={{
									objectFit: "fill",
									borderRadius: "12px",
									width: "100%",
									height: "100%",
									cursor: "pointer",
								}}
								onClick={() => setIsMRS(true)}
							/>
						</div>
					</div>
				</section>
				{isMRS && (
					<div>
						<FutureFilmRiceModal
							isOpen={isMRS}
							closeModal={() => setIsMRS(false)}
						/>
					</div>
				)}
			</div>
		</main>
	);
};

export default NadeFilm;
