// คำนวณค่าโดยสารรถ NGV ตามระยะทาง
const calcFare = (distanceKm) => {
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? roundedDistance * 5 : 10 + (roundedDistance - 2) * 2;
};

const testCalcFare = () => {
	const testCases = [
		{ distance: 0, expected: 0 },
		{ distance: 1.5, expected: 10 },
		{ distance: 2, expected: 10 },
		{ distance: 2.1, expected: 12 },
		{ distance: -1, expected: 0 },
		{ distance: "2", expected: 0 },
	];

	for (const testCase of testCases) {
		const actual = calcFare(testCase.distance);
		if (actual !== testCase.expected) {
			throw new Error(
				`ระยะทาง ${testCase.distance}: ได้ ${actual} แต่ควรได้ ${testCase.expected}`
			);
		}
	}

	console.log("ผ่านการทดสอบ calcFare ทุกกรณี");
};

testCalcFare();
