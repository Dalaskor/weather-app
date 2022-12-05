import React from "react";
import style from "./RowCards.module.scss";
import sunriseUrl from "./../../assets/img/sunrise.png";
import sunsetUrl from "./../../assets/img/sunset.png";
import Card from "../Card/Card";

interface rowCardsProps {
	sunriseTime: number;
	sunsetTime: number;
}

const RowCards = ({ sunriseTime, sunsetTime }: rowCardsProps) => {
	return (
		<div className={style.row}>
			<Card title={"Sunrise"} param={sunriseTime} imgUrl={sunriseUrl} />
			<Card title={"Sunset"} param={sunsetTime} imgUrl={sunsetUrl} />
		</div>
	);
};

export default RowCards;
