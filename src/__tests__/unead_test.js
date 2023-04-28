import Undead from '../undead';

test('Проерка создания персонажа с типом Undead', () => {
  const undead = new Undead('Freddy', 'Undead');
  const expected = {
    name: 'Freddy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  expect(() => new Undead('Freddy_very_long', 'Undead').toThrow());
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  expect(() => new Undead('F', 'Undead').toThrow());
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  expect(() => new Undead('Freddy', 'Dwarf').toThrow());
});
