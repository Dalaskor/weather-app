import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { ICoords, IWheather } from "../model";

export const useWeather = (coords: ICoords) => {
	const [weather, setWeather] = useState<IWheather>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const apiKey = "b2bfd67809b854f6308d532784e14bbb";
	const baseURL = "https://api.openweathermap.org/data/2.5/weather";

	const fetchWeather = async () => {
		try {
			setError("");
			setLoading(true);

			const url = baseURL + `?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&units=metric`;
			const response = await axios.get<IWheather>(url);

			setWeather(response.data);
			setLoading(false);
		} catch (e: unknown) {
			const error = e as AxiosError;
			setLoading(false);
			setError(error.message);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	return { weather, error, loading };
};
