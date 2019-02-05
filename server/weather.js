var weatherCheck = (weather) => {
	var status;
	switch (weather) {
		case "sunny":
			status = true;
			break;

		case "windy":
			status = true;
			break;
		case "rainy":
			status = true;
			break;
		default:
			status = false;
			break;

	}
	return status;

};
module.exports = {
	weatherCheck
}