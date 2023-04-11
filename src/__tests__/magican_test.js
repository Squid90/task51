import Magician from '../magician';

// eslint-disable-next-line
test('Проерка создания персонажа с типом Magician', () => {
    const magician = new Magician('Gandalf', 'Magician');
    const expected = {
        name: 'Gandalf',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    // eslint-disable-next-line
    expect(magician).toEqual(expected);
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем больше 10 символов', () => {
    try {
        const magician = new Magician('Gandalf_very_long', 'Magician');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c именем менее 2 символов', () => {
    try {
        const magician = new Magician('G', 'Magician');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});

// eslint-disable-next-line
test('Проерка создания персонажа c отсутствующим типом', () => {
    try {
        const magician = new Magician('Gandalf', 'Dwarf');
    } catch (err) {
        expect(err).not.toBeNull();
    } 
});