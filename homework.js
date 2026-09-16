// งาน: คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม.แรก 10 บาท, กม.ถัดไปคิดกม.ละ 2 บาท, เศษของกม.ปัดขึ้น
// ระยะทางติดลบหรือไม่ใช่ตัวเลข ให้คืนค่า 0

const calcFare = (distanceKm) => {
	// ไม่ใช่ตัวเลข หรือเป็นค่าที่ไม่สิ้นสุด หรือติดลบ ให้คืน 0
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);

	// ระยะทาง 0 กม. ไม่ได้เดินทาง คิด 0 บาท
	if (roundedDistance === 0) {
		return 0;
	}

	// 2 กม.แรกเหมาจ่าย 10 บาท ส่วนที่เกินคิดกม.ละ 2 บาท
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ตัวอย่างการเรียกใช้งาน
console.log(calcFare(0)); // 0
console.log(calcFare(1.5)); // 10 (ปัดขึ้นเป็น 2 กม.)
console.log(calcFare(2)); // 10 (2 กม.แรก)
console.log(calcFare(2.1)); // 12 (ปัดขึ้นเป็น 3 กม. => 10 + 1*2)
console.log(calcFare(5)); // 16 (10 + 3*2)
console.log(calcFare(-1)); // 0 (ติดลบ)
console.log(calcFare("2")); // 0 (ไม่ใช่ตัวเลข)