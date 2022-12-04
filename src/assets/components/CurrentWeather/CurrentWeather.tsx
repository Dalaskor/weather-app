import React from "react";
import { useWeather } from "../../../hooks/weather";
import Loader from "../Loader/Loader";
import style from "./CurrentWeather.module.scss";

interface currentWeatherProps {
	city: string;
}

const CurrentWeather = ({ city }: currentWeatherProps) => {
	const { weather, error, loading } = useWeather(city);
	return (
		<section className={style.weather}>
			<div className={style.weather__container}>
				<Loader/>
				<div className={style.weather__city}>{}</div>
				<div className={style.weather__image}>{}</div>
				<div className={style.weather__temp}>{}</div>
				<div className={style.weather__type}>{}</div>
			</div>
		</section>
	);
};

export default CurrentWeather;
