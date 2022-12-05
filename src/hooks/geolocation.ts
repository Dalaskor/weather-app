import { useEffect, useState } from "react";
import { ICoords } from "../model";

export const useGeolocation = () => {
	const [loading, setLoading] = useState(false);
	const [coords, setCoords] = useState<ICoords>();

	const checkGeolocation = () => {
		setLoading(true);
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCoords({
						lat: Math.round(position.coords.latitude * 100) / 100,
						lon: Math.round(position.coords.longitude * 100) / 100,
					});
				},
				() => {
					console.log("WARNING: Geolocation is not available!");
					setCoords({
						lat: 0,
						lon: 0,
					});
				}
			);
		} else {
			console.log("WARNING: Geolocation API is not available!");
		}
		setLoading(false);
	};

	useEffect(() => {
		checkGeolocation();
	}, []);

	return { coords, loading };
};
