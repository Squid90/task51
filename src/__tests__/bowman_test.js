import Bowman from '../bowman';

// eslint-disable-next-line
test('Проерка корректного создания персонажа с типом Bowman', () => {
    const bowman = new Bowman('Legolas', 'Bowman');
    const expected = {
        name: 'Legolas',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    // eslint-disable-next-line
    expect(bowman).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
    try {
        const bowman = new Bowman('Legolas_very_long', 'Bowman');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
    try {
        const bowman = new Bowman('L', 'Bowman');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
    try {
        const bowman = new Bowman('Legolas', 'Dwarf');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});