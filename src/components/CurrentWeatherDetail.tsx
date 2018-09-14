import * as React from "react";

const CurrentWeatherDetail = (element:any) => (
	<div className="weatherCard">
	 {	
	 	element.city && element.country && 
		<p><span className="weatherCountry"> { element.city }, { element.country }</span></p> 
	 }

	 { 	
		element.icon && 
		<p> <span><img className="weatherIcon" src={"http://openweathermap.org/img/w/" + element.icon + ".png"}/></span></p> 
	 }

	 { 	
	 	element.temperature && 
		<p className="weatherCardFontStyle"> Current Temperature: <span className="mainTemp"> { element.temperature }°C	</span></p> 
	 }

	 { 	
	 	element.temperatureMin && 
		<p className="weatherCardFontStyle"> Minimum Temp: <span className="weatherValue"> { element.temperatureMin }°C </span></p> 
	 }

	 { 	
	 	element.temperatureMax && 
		<p className="weatherCardFontStyle"> Maximum Temp: <span className="weatherValue"> { element.temperatureMax }°C </span></p> 
	 }

	 { 	
	 	element.humidity && 
		<p className="weatherCardFontStyle"> Humidity: <span className="weatherValue"> { element.humidity } </span></p> 
	 }

	 { 	
	 	element.description && 
		<p className="weatherCardFontStyle"> Conditions: <span className="humidityValue"> { element.description } </span></p> 
	 }
	</div>
);

export default CurrentWeatherDetail;