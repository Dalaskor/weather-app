import React from "react";
import { useWeather } from "../../hooks/weather";
import { ICoords } from "../../model";
import Loader from "../Loader/Loader";
import RowCards from "../RowCards/RowCards";
import style from "./CurrentWeather.module.scss";

interface currentWeatherProps {
	coords: ICoords,
}

const CurrentWeather = ({ coords }: currentWeatherProps) => {
	const { weather, error, loading } = useWeather(coords);
	return (
		<section className={style.weather}>
			<div className={style.weather__container}>
				{loading && <Loader />}
				{error && <div>error</div>}
				{weather && (
					<>
						<div className={style.weather__city}>{weather.name}</div>
						<div className={style.weather__image}>{}</div>
						<div className={style.weather__temp}>{Math.round(weather.main.temp) + '°С'}</div>
						<div className={style.weather__type}>{weather.weather[0].main}</div>
						<div className={style.weather__moreinfo}>
							<div className={style.weather__info}>
								<div className={style.weather__infoTitle}>Wind</div>
								<div className={style.weather__infoDesc}>{weather.wind.speed + 'm/s'}</div>
							</div>
							<div className={style.weather__info}>
								<div className={style.weather__infoTitle}>Humidity</div>
								<div className={style.weather__infoDesc}>{weather.main.humidity + '%'}</div>
							</div>
							<div className={style.weather__info}>
								<div className={style.weather__infoTitle}>Pressure</div>
								<div className={style.weather__infoDesc}>{weather.main.pressure + 'mmHg'}</div>
							</div>
						</div>
						<div className={style.weather__row}>
							<RowCards sunriseTime={weather.sys.sunrise} sunsetTime={weather.sys.sunset} />
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default CurrentWeather;
