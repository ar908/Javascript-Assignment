const CanDrive = require("../assignments/can_drive/can_drive");

describe('can_drive', () => {
    test('No Liscence, Tired, Sober', () => {
        expect(CanDrive(false, true, true)).toEqual("You cannot drive");
    });

    test('Liscence, Tired, Not Sober', () => {
        expect(CanDrive(true, true, false)).toEqual("You shouldn't drive");
    });

    test('Liscence, Not Tired, Not Sober', () => {
        expect(CanDrive(true, false, false)).toEqual("You shouldn't drive");
    });

    test('Liscence, Not Tired, Sober', () => {
        expect(CanDrive(true, false, true)).toEqual("You can drive");
    });
})