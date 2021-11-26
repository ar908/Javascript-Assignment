const RunCallback = require("../assignments/run_callback/run_callback");

describe('run_callback', () => {
    test('Multiply', () => {
        expect(RunCallback(2, 3, function(a) { return 2 * a })).toEqual(10);
    });

    test('Add', () => {
        expect(RunCallback(6, 4, function(a) { return 3 + a })).toEqual(13);
    });

    test('Print', () => {
        expect(RunCallback(5, 8, function(a){ return "result: " + a })).toEqual("result: 13");
    });
})