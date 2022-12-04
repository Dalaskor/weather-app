import "./App.scss";
import CurrentWeather from "./assets/components/CurrentWeather/CurrentWeather";
import DateComponent from "./assets/components/Date/DateComponent";

const App = () => {
	return (
		<>
			<DateComponent />
			<CurrentWeather city="Astrakhan" />
		</>
	);
};

export default App;
