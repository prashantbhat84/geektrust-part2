var {
	weatherCheck
} = require('./weather');
var problem1 = (params) => {

	var WeatherCheck = weatherCheck(params.weather.toLowerCase());
	if (!WeatherCheck) {
		return 'incorrect weather input. Please enter the weather as SUNNY/WINDY/RAINY'
	}


	return params;





};
var problem2 = (params) => {
	var WeatherCheck = weatherCheck(params.weather.toLowerCase());


	if (!WeatherCheck) {
		return 'incorrect weather input. Please enter the weather as SUNNY/WINDY/RAINY';
	}

	return params;

};

module.exports = {
	problem1,
	problem2
}