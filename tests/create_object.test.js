const CreateObject = require("../assignments/create_object/create_object");

describe('create_object', () => {
    test('Employee Object', () => {
        expect(CreateObject(["name", "Yash", "id", "23442", "email", "jon.doe@gmail.com"])).toEqual({ name: "Yash", id: "23442", email: "jon.doe@gmail.com"});
    });

    test('Cars', () => {
        expect(CreateObject(["maruti", "omni", "tata", "indica", "ford", "figo"])).toEqual({ maruti: "omni", tata: "indica", ford: "figo"});
    });
})