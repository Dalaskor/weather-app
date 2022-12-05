import React from "react";
import style from "./DateComponent.module.scss";

const DateComponent = () => {
	let date = new Date();
	const dd = date.getDate();
	const mm = date.getMonth() + 1;
	const yy = date.getFullYear();

	let ddS = dd < 10 ? `0${dd}` : `${dd}`;
	let mmS = mm < 10 ? `0${mm}` : `${mm}`;

	const currentDate = `${ddS}.${mmS}.${yy}`;

	return <section className={style.date}>{currentDate}</section>;
};

export default DateComponent;
