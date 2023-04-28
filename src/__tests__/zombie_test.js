import Zombie from '../zombie';

test('Проерка корректного создания персонажа с типом Zombie', () => {
  const zombie = new Zombie('Bob', 'Zombie');
  const expected = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Zombie('Bob_very_long', 'Zombie').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Zombie('B', 'Zombie').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Zombie('Bob', 'Dwarf').toThrow());
});
