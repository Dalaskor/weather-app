import React from "react";
import style from "./Loader.module.scss";

const Loader = () => {
	return (
		<div className={style.lds_ripple}>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
