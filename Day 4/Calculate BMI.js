/**
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
  const sum = weight / (height * height);
  return sum <= 18.5
    ? "Underweight"
    : sum <= 25.0
    ? "Normal"
    : sum <= 30.0
    ? "Overweight"
    : sum > 30 && "Obese";
}

console.log(bmi(80, 1.8));
