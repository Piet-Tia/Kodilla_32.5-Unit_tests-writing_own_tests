const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let initialPoints = 60;
	if (hillSize === 'flying'){
		initialPoints = 120;
	}

	const distanceToKPoint = distance - kPoint;

	const distanceFactor = hillSize === 'normal' ? 2 : hillSize === 'large' ? 1.8 : 1.2;

	return initialPoints + distanceToKPoint * distanceFactor;


};

module.exports = calculateDistancePoints;
