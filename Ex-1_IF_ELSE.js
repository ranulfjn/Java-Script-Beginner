var markMass = 80;
var markHeight = 1.8;
var stoneMass = 75;
var stoneHeight = 1.72;
var stoneBMi;
var markBMi;
var isBMi;

markBMi = markMass / (markHeight * markHeight);
stoneBMi = stoneMass / (stoneHeight * stoneHeight);


if (markBMi > stoneBMi) {
    isBMi = true;
} else {
    isBMi = false;
}

if (isBMi) {
    console.log("Mark's BMI is Greater than Stone's");
}
else {
    console.log("Stone's BMI is Greater than Mark's");
}