const { getEven, multiplyByN, removeNthElement } = require("../assignments/play_with_array/play_with_array");

describe('play_with_array', () => {
    test('Get Even', () => {
        expect(getEven([2,4,6,7,8])).toEqual([2,4,6,8]);
        expect(getEven([1,14,3,7,8])).toEqual([14,8]);
    });

    test('Multiply By N', () => {
        expect(multiplyByN([2,3,5,6], 5)).toEqual([10, 15, 25, 30]);
        expect(multiplyByN([2,1,5,6], 2)).toEqual([4, 2, 10, 12]);
    });

    test('Remove Nth Element', () => {
        expect(removeNthElement([1,2,3,4,5], 0)).toEqual([2,3,4,5]);
        expect(removeNthElement([2,1,5,6,12], 2)).toEqual([2,1,6,12]);
    });
})