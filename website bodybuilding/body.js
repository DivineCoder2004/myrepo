function calculateBMI(weight, height) {
    // Convert height to meters
    height = height / 100; // Assuming height is in centimeters, convert it to meters
    // Calculate BMI
    var bmi = weight / (height * height);
    // Round BMI to two decimal places
    return bmi.toFixed(2);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function calculateBodyFat(weight, height, age, gender) {
    // Calculate body fat percentage based on weight, height, age, and gender
    var bmi = calculateBMI(weight, height);
    var genderFactor = gender === 'male' ? 1 : 0;
    var bodyFatPercentage = (1.20 * parseFloat(bmi)) + (0.23 * age) - (10.8 * genderFactor) - 5.4;
    return bodyFatPercentage.toFixed(2);
}

function calculateIdealWeight(height, gender) {
    // Calculate ideal weight based on height and gender
    var idealWeight;
    if (gender === 'male') {
        idealWeight = 50 + 2.3 * ((height / 2.54) - 60);
    } else {
        idealWeight = 45.5 + 2.3 * ((height / 2.54) - 60);
    }
    return idealWeight.toFixed(2);
}

function calculateIdealBodyFatPercentage(gender) {
    // Calculate ideal body fat percentage based on gender
    var idealBodyFatPercentage;
    if (gender === 'male') {
        idealBodyFatPercentage = 15;
    } else {
        idealBodyFatPercentage = 25;
    }
    return idealBodyFatPercentage.toFixed(2);
}

// Example usage
var weight = parseFloat(prompt("Enter your weight (in kilograms):"));
var height = parseFloat(prompt("Enter your height (in centimeters):"));
var age = parseInt(prompt("Enter your age:"));
var gender = prompt("Enter your gender (male/female):").toLowerCase();

var bmi = calculateBMI(weight, height);
var interpretation = interpretBMI(bmi);

var bodyFatPercentage = calculateBodyFat(weight, height, age, gender);
var idealWeight = calculateIdealWeight(height, gender);
var idealBodyFatPercentage = calculateIdealBodyFatPercentage(gender);

console.log("Your BMI is: " + bmi);
console.log("Interpretation: " + interpretation);
console.log("Your body fat percentage is: " + bodyFatPercentage + "%");
console.log("Your ideal weight is: " + idealWeight + " kg");
console.log("Your ideal body fat percentage is: " + idealBodyFatPercentage + "%");
