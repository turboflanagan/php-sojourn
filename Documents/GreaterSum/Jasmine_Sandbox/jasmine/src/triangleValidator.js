function isTriangle (side1, side2, side3) {
	if(side1 + side2 >= side3){
		return "true";
	}
	typeOfTriangle(side1, side2, side3)
}

	function typeOfTriangle(side1,side2,side3){
	    if(side1 == side2 && side2 == side3 && side3 == side1){
			return "Equilateral Triangle";
		}
		if(side1 == side2 || side2 == side3 || side3 == side2 || side3 == side1){
			return "Isosceles Triangle";
		}
		if(side1 != side2 && side2 != side3 && side3 != side1){
			return "Scalene Triangle";
		}
	}

isTriangle(2,3,4);
