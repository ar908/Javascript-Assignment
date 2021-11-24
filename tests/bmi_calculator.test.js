const BMICalculator = require("../assignments/bmi_calculator/bmi_calculator");

describe('bmi_calculator', () => {
    test('Calculate BMI for mass 50 and height 5', () => {
        expect(BMICalculator(50, 5)).toBe(2);
    });

    test('Calculate BMI for mass 100 and height 5', () => {
        expect(BMICalculator(100, 5)).toBe(4);
    });

    test('Calculate BMI for mass 0 and height 5', () => {
        expect(BMICalculator(0, 5)).toBe("INVALID INPUT");
    });

    test('Calculate BMI for mass 45 and height 0', () => {
        expect(BMICalculator(45, 0)).toBe("INVALID INPUT");
    });
})