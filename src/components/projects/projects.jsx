import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

import snowman from "../../assets/films/posters/the-magic-snowman.png";
import hellnight from "../../assets/films/posters/happy-hell-night.png";
import perfumemovie from "../../assets/films/posters/Promise_of_perfume_poster.jpg";
import americanPil from "../../assets/films/posters/my-american-pilgrimage.jpg";
import colorsMax from "../../assets/films/posters/the-colors-of-macedonia.png";
import gotse_film from "../../assets/films/posters/gotse.png";
import nade_film from "../../assets/films/posters/nade-poster.jpg";

const sections = [
	{
		title: "Features",
		id: "previous-films",
		films: [
			{
				to: "/the-magic-snowman",
				img: snowman,
				title: "The Magic Snowman",
			},
			{
				to: "/happy-hell-night",
				img: hellnight,
				title: "Happy Hell Night",
			},
		],
	},
	{
		title: "Documentaries",
		films: [
			{
				to: "/promise-of-perfume",
				img: perfumemovie,
				title: "Promise of Perfume",
			},
			{
				to: "/my-american-pilgrimage",
				img: americanPil,
				title: "My American Pilgrimage",
			},
		],
	},
	{
		title: "Short Films",
		films: [
			{
				to: "/colors-of-macedonia",
				img: colorsMax,
				title: "The Colors of Macedonia",
			},
			{ to: "/gotse", img: gotse_film, title: "Gotse" },
			{ to: "/nade", img: nade_film, title: "Nade" },
		],
	},
];

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="projects" className="text-uppercase main-margin">
			{sections.map((section, i) => (
				<React.Fragment key={section.title}>
					{i > 0 && <hr className="hr-sep" />}
					<section
						id={section.id}
						className="margin-main projects-section"
					>
						<div className="col-12 p-xl-0 pb-xl-0 m-0">
							<h2 className="p-0">{section.title}</h2>
						</div>

						<div className="poster-grid">
							{section.films.map((film) => (
								<Link
									key={film.to}
									to={film.to}
									className="poster-card"
								>
									<img src={film.img} alt={film.title} />
								</Link>
							))}
						</div>
					</section>
				</React.Fragment>
			))}
		</main>
	);
};

export default Projects;
