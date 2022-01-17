// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(mass<=0 || height<=0){
        return "INVALID INPUT";
    }else{
        BMI = mass / (height * height);
        return BMI;
    }
}

module.exports = BMICalculator;
