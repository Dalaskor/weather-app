import "./App.scss";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DateComponent from "./components/Date/DateComponent";
import Loader from "./components/Loader/Loader";
import { useGeolocation } from "./hooks/geolocation";

const App = () => {
	const { coords, loading } = useGeolocation();

	return (
		<>
			{loading && <Loader />}
			<DateComponent />
			{coords && <CurrentWeather coords={coords} />}
		</>
	);
};

export default App;
