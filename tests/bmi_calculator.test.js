const BMICalculator = require("../assignments/bmi_calculator");

describe('BMI Calculator Test Cases', () => {
    test('Calculate BMI for mass 50 and height 5', () => {
        expect(BMICalculator(50, 5)).toBe(2);
    });

    test('Calculate BMI for mass 50 and height 5', () => {
        expect(BMICalculator(100, 5)).toBe(4);
    });
})