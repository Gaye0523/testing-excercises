const { sum, momIsMadRandomAnswer, reverseArray, promise, multiplication, birthdayGift } = require('../index');

xtest('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

xtest('Retorna un valor booleano', () => {
    expect(typeof momIsMadRandomAnswer()).toBe('boolean');

});

xtest('Que invierta un array', () => {
    let array = [1, 2, 3, 4, 5]
    expect(reverseArray(array)).toEqual([5, 4, 3, 2, 1])
});

xtest('Promesa que retorna 3', () => {
    expect(promise).resolves.toBe(3);
});

xtest('Debe retornar array', () => {
    const newArray = [1, 2, 3, 4]
    expect(multiplication()).resolves.toBe(newArray)
});

test('Promesa retorna, Mi madre decidió no comprarme un nuevo teléfono ', () => {
    const momIsMad = true;
    expect(birthdayGift(momIsMad)).resolves.toBe('Mi madre decidió no comprarme un nuevo teléfono');

});

xtest('Promesa retorna, Mi mamá está feliz!, me compró un nuevo teléfono', () => {
    const momIsMad = false;
    expect(birthdayGift(momIsMad)).resolves.toBe('Mi mamá está feliz!, me compró un nuevo teléfono');

});

