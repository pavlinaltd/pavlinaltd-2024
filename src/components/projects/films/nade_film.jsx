import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

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
				{/* Video: medium size, centered */}
				<section
					style={{
						width: "100%",
						maxWidth: "700px",
						margin: "0 auto",
					}}
				>
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
				</section>

				{/* Text + poster */}
				<section className="mt-4 margin-main">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "24px",
							maxWidth: "800px",
							margin: "0 auto 3rem",
						}}
					>
						<div
							style={{
								width: "100%",
								fontSize: "16px",
								lineHeight: 1.6,
								textAlign: "justify",
							}}
						>
							<p style={{ margin: 0, fontSize: "16px" }}>
								<span style={{ fontWeight: "bold" }}>
									Instead of a Hagiography{" "}
								</span>
								- A film that celebrates the woman who gave
								Macedonia back its ancient voice.
							</p>
						</div>

						<div style={{ width: "100%", maxWidth: "340px" }}>
							<img
								src={Poster}
								alt="Nade Proeva Film"
								style={{
									display: "block",
									width: "100%",
									height: "auto",
									borderRadius: "12px",
									cursor: "pointer",
								}}
								onClick={() => setIsMRS(true)}
							/>
						</div>
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

export default NadeFilm;
