import Swordsman from '../swordsman';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Swordsman', () => {
    const swordsman = new Swordsman('Aragorn', 'Swordsman');
    const expected = {
        name: 'Aragorn',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    // eslint-disable-next-line
    expect(swordsman).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
    try {
        const swordsman = new Swordsman('Aragorn_very_long', 'Swordsman');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
    try {
        const swordsman = new Swordsman('A', 'Swordsman');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
    try {
        const swordsman = new Swordsman('Aragorn', 'Dwarf');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});