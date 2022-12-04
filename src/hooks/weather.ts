import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IWheather } from "../model";

export const useWeather = (city: string) => {
	const [weather, setWeather] = useState<IWheather>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const apiKey = "b2bfd67809b854f6308d532784e14bbb";
	const baseURL = "https://api.openweathermap.org/data/2.5/weather";

	const fetchWeather = async () => {
		try {
			setError("");
			setLoading(true);

			const url = baseURL + `?appid=${apiKey}&q=${city}`;
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
