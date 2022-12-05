import React from "react";
import style from "./Card.module.scss";

interface cardProps {
	title: string;
	param: number;
	imgUrl: string;
}

const Card = ({ title, param, imgUrl }: cardProps) => {
	return (
		<div className={style.card}>
			<div className={style.card__container}>
				<div className={style.card__image}>
					<img src={imgUrl} alt="Image Card" />
				</div>
				<div className={style.card__title}>{title}</div>
				<div className={style.card__param}>{param}</div>
			</div>
		</div>
	);
};

export default Card;
