import React, { useEffect } from "react";
import "./gustela.css";
import Poster from "../../../assets/films/posters/gustella-new.png";
import Image from "../../../assets/films/gustella-castle.webp";
import ImdbIcon from "../../../assets/common/imdbna.png";
import gustellaScript from "../../../assets/films/gustella_script.jpg";

const Gustella = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="main-margin">
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="gustella-video">
						<div className="ratio ratio-16x9">
							<iframe
								src="https://www.youtube.com/embed/1LAN_RWFCV4?si=X-Pr7lclFjppE0NL"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
					<div
						style={{
							textAlign: "center",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignContent: "center",
							marginTop: "20px",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
								fontSize: "24px",
								fontWeight: "600",
								borderRadius: "12px",
							}}
						>
							<div
								style={{ marginRight: "10px", color: "black" }}
							>
								Visit
							</div>
							<a
								href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_c_7_prd"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={ImdbIcon}
									alt=""
									className="img hoverable-img"
									style={{
										objectFit: "fill",
										maxWidth: "100px",
										maxHeight: "50px",
									}}
								/>
							</a>
						</div>
					</div>
				</div>

				<section className="gustella-gallery">
					<div className="gustella-gallery-poster">
						<img src={Poster} alt="Gustella poster" />
					</div>

					<div className="gustella-gallery-script">
						<img src={gustellaScript} alt="Gustella script page" />
					</div>
				</section>

				<div className="gustella-castle">
					<img src={Image} alt="Castle" />
				</div>
			</div>
		</main>
	);
};

export default Gustella;
