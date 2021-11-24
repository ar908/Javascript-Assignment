const favouriteMovie = require("../assignments/favourite_movie/favourite_movie");

describe('favourite_movie', () => {
    test('Add movie Seven', () => {
        expect(favouriteMovie("add", "Seven")).toEqual(["Seven"]);
    });

    test('Add movie X-Men', () => {
        expect(favouriteMovie("add", "X-Men")).toEqual(["Seven", "X-Men"]);
    });

    test('Remove movie', () => {
        expect(favouriteMovie("remove")).toEqual(["Seven"]);
    });

    test('Remove movie', () => {
        expect(favouriteMovie("remove")).toEqual([]);
    });
})