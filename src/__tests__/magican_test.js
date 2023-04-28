import Magician from '../magician';

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
  expect(magician).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Magician('Gandalf_very_long', 'Magician').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Magician('G', 'Magician').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Magician('Gandalf', 'Dwarf').toThrow());
});
