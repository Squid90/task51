import Swordsman from '../swordsman';

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
  expect(swordsman).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  const swordsman = new Swordsman('Aragorn_very_long', 'Swordsman');
  expect(swordsman).toThrowError();
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  const swordsman = new Swordsman('A', 'Swordsman');
  expect(swordsman).toThrowError();
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  const swordsman = new Swordsman('Aragorn', 'Dwarf');
  expect(swordsman).toThrowError();
});
